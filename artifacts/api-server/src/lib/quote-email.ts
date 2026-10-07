import {
  SubmitQuoteRequestBody,
  SubmitQuoteRequestResponse,
} from "@workspace/api-zod";

const OWNER_EMAIL = "Perfecteinte@hotmail.ca";
const RESEND_EMAILS_URL = "https://api.resend.com/emails";

const SERVICE_LABELS = {
  ppf: "PPF — Pellicule pare-pierre",
  teintage: "Vitres teintées",
} as const;

type QuoteRequest = ReturnType<typeof SubmitQuoteRequestBody.parse>;
type QuoteRequestResponse = ReturnType<typeof SubmitQuoteRequestResponse.parse>;

type ResendConfig = {
  apiKey?: string;
  fromEmail?: string;
};

type EmailDraft = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export class QuoteEmailError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "QuoteEmailError";
  }
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function vehicleDescription(request: QuoteRequest): string {
  return [request.vehicleYear, request.vehicleMake, request.vehicleModel].join(" ");
}

function selectedServiceLabels(request: QuoteRequest): string[] {
  return request.services.map((service) => SERVICE_LABELS[service]);
}

function buildCustomerConfirmationEmail(request: QuoteRequest): EmailDraft {
  const services = selectedServiceLabels(request);
  const vehicle = vehicleDescription(request);
  const safeName = escapeHtml(request.firstName);
  const serviceHtml = services.map((service) => `<li>${escapeHtml(service)}</li>`).join("");
  const serviceText = services.map((service) => `- ${service}`).join("\n");

  return {
    to: request.email,
    subject: "Nous avons reçu votre demande de soumission | Perfecteinte",
    html: `<!doctype html>
<html lang="fr">
  <body style="margin:0;background:#f4f5f6;font-family:Arial,sans-serif;color:#202124">
    <div style="max-width:600px;margin:0 auto;padding:32px 20px">
      <div style="background:#fff;border-radius:12px;padding:32px">
        <p style="margin:0 0 20px;color:#b68b32;font-weight:700;letter-spacing:1px">PERFECTEINTE</p>
        <h1 style="font-size:24px;margin:0 0 16px">Merci pour votre demande, ${safeName}</h1>
        <p style="line-height:1.6;margin:0 0 20px">Nous avons bien reçu votre demande de soumission. Voici un résumé des renseignements transmis :</p>
        <p style="margin:0 0 8px"><strong>Véhicule :</strong> ${escapeHtml(vehicle)}</p>
        <p style="margin:0 0 8px"><strong>Services demandés :</strong></p>
        <ul style="margin:0 0 24px;padding-left:22px;line-height:1.6">${serviceHtml}</ul>
        <p style="line-height:1.6;margin:0">Notre équipe vous répondra dans un délai de <strong>24 à 48 heures</strong>.</p>
        <p style="line-height:1.6;margin:24px 0 0">À bientôt,<br>L’équipe Perfecteinte</p>
      </div>
    </div>
  </body>
</html>`,
    text: `Bonjour ${request.firstName},

Nous avons bien reçu votre demande de soumission.

Véhicule : ${vehicle}
Services demandés :
${serviceText}

Notre équipe vous répondra dans un délai de 24 à 48 heures.

À bientôt,
L’équipe Perfecteinte`,
  };
}

function buildOwnerNotificationEmail(request: QuoteRequest): EmailDraft {
  const services = selectedServiceLabels(request);
  const vehicle = vehicleDescription(request);
  const color = request.vehicleColor?.trim() || "Non précisée";
  const message = request.message?.trim() || "Aucun message";

  const rows = [
    ["Nom", `${request.firstName} ${request.lastName}`],
    ["Téléphone", request.phone],
    ["Courriel", request.email],
    ["Véhicule", vehicle],
    ["Couleur", color],
    ["Services", services.join(", ")],
  ];
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:10px 12px;border-bottom:1px solid #e6e7e8;color:#60656b">${escapeHtml(label)}</th><td style="padding:10px 12px;border-bottom:1px solid #e6e7e8">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return {
    to: OWNER_EMAIL,
    replyTo: request.email,
    subject: "Nouvelle demande de soumission | Perfecteinte",
    html: `<!doctype html>
<html lang="fr">
  <body style="margin:0;background:#f4f5f6;font-family:Arial,sans-serif;color:#202124">
    <div style="max-width:680px;margin:0 auto;padding:32px 20px">
      <div style="background:#fff;border-radius:12px;padding:32px">
        <p style="margin:0 0 16px;color:#b68b32;font-weight:700;letter-spacing:1px">PERFECTEINTE</p>
        <h1 style="font-size:24px;margin:0 0 20px">Nouvelle demande de soumission</h1>
        <table style="width:100%;border-collapse:collapse;font-size:15px">${rowsHtml}</table>
        <h2 style="font-size:17px;margin:24px 0 8px">Message du client</h2>
        <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(message)}</p>
      </div>
    </div>
  </body>
</html>`,
    text: `Nouvelle demande de soumission — Perfecteinte

Nom : ${request.firstName} ${request.lastName}
Téléphone : ${request.phone}
Courriel : ${request.email}
Véhicule : ${vehicle}
Couleur : ${color}
Services : ${services.join(", ")}

Message du client :
${message}`,
  };
}

async function sendEmail(
  apiKey: string,
  fromEmail: string,
  email: EmailDraft,
): Promise<void> {
  const response = await fetch(RESEND_EMAILS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email.to],
      subject: email.subject,
      html: email.html,
      text: email.text,
      ...(email.replyTo ? { reply_to: email.replyTo } : {}),
    }),
  });

  if (!response.ok) {
    throw new QuoteEmailError(
      502,
      "La demande n’a pas pu être envoyée. Réessayez ou écrivez-nous à Perfecteinte@hotmail.ca.",
    );
  }
}

export async function submitQuoteRequest(
  input: unknown,
  config: ResendConfig,
): Promise<QuoteRequestResponse> {
  const parsed = SubmitQuoteRequestBody.safeParse(input);
  if (!parsed.success) {
    throw new QuoteEmailError(
      400,
      "Veuillez vérifier les renseignements de votre demande et réessayer.",
    );
  }

  const request = parsed.data;
  if (new Set(request.services).size !== request.services.length) {
    throw new QuoteEmailError(400, "Choisissez chaque service une seule fois.");
  }

  const apiKey = config.apiKey?.trim();
  const fromEmail = config.fromEmail?.trim();
  if (!apiKey || !fromEmail) {
    throw new QuoteEmailError(
      503,
      "La soumission en ligne est temporairement indisponible. Écrivez-nous à Perfecteinte@hotmail.ca ou appelez le (418) 450-3990.",
    );
  }

  try {
    await sendEmail(apiKey, fromEmail, buildOwnerNotificationEmail(request));
    await sendEmail(apiKey, fromEmail, buildCustomerConfirmationEmail(request));
  } catch (error) {
    if (error instanceof QuoteEmailError) {
      throw error;
    }
    throw new QuoteEmailError(
      502,
      "La demande n’a pas pu être envoyée. Réessayez ou écrivez-nous à Perfecteinte@hotmail.ca.",
    );
  }

  return SubmitQuoteRequestResponse.parse({
    ok: true,
    message: "Votre demande a été envoyée. Nous vous répondrons dans un délai de 24 à 48 heures.",
  });
}
