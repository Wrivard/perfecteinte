// Vercel emits traced TypeScript files as .js without rewriting workspace
// package exports that point at .ts. Use the generated schema's JS path.
import {
  SubmitQuoteRequestBody,
  SubmitQuoteRequestResponse,
} from "../../../../lib/api-zod/src/generated/api.js";
import { Resend } from "resend";
import {
  buildCustomerConfirmationEmail,
  buildOwnerNotificationEmail,
  type EmailDraft,
} from "./email-templates.js";

const REQUIRED_FROM_EMAIL = "bonjour@kua.quebec";

type QuoteRequestResponse = ReturnType<typeof SubmitQuoteRequestResponse.parse>;

type ResendConfig = {
  apiKey?: string;
  fromEmail?: string;
  recipientEmail?: string;
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

async function sendEmails(
  apiKey: string,
  fromEmail: string,
  emails: EmailDraft[],
): Promise<void> {
  const resend = new Resend(apiKey);
  // Both templates are submitted in one batch, instead of two separate sends.
  // Do not report success unless Resend accepts both messages.
  const { data, error } = await resend.batch.send(
    emails.map((email) => ({
      ...email,
      from: `Perfecteinte <${fromEmail}>`,
      to: [email.to],
    })),
  );

  if (error || data?.data?.length !== emails.length || data.data.some((email) => !email.id)) {
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
  const recipientEmail = config.recipientEmail?.trim();
  if (
    !apiKey ||
    fromEmail !== REQUIRED_FROM_EMAIL ||
    !recipientEmail ||
    !SubmitQuoteRequestBody.shape.email.safeParse(recipientEmail).success
  ) {
    throw new QuoteEmailError(
      503,
      "La soumission en ligne est temporairement indisponible. Écrivez-nous à Perfecteinte@hotmail.ca ou appelez le (418) 450-3990.",
    );
  }

  try {
    await sendEmails(apiKey, fromEmail, [
      buildOwnerNotificationEmail(request, recipientEmail),
      buildCustomerConfirmationEmail(request, recipientEmail),
    ]);
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
