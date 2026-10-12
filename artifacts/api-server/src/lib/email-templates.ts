import type { SubmitQuoteRequestBody } from "@workspace/api-zod";

type QuoteRequest = ReturnType<typeof SubmitQuoteRequestBody.parse>;

export type EmailDraft = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

const ORANGE = "#f57b00";
// Public production alias: unlike deployment-hash URLs, this follows new builds.
const EMAIL_LOGO_URL = "https://perfecteinte-lac.vercel.app/perfecteinte-logo-email.png";
const SERVICE_LABELS = {
  ppf: "PPF — Pellicule pare-pierre",
  teintage: "Vitres teintées",
} as const;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

function vehicle(request: QuoteRequest): string {
  return [request.vehicleYear, request.vehicleMake, request.vehicleModel].join(" ");
}

function services(request: QuoteRequest): string[] {
  return request.services.map((service) => SERVICE_LABELS[service]);
}

function detailRow(label: string, value: string): string {
  return `<tr>
    <th scope="row" align="left" valign="top" width="30%" style="padding:12px 12px 12px 0;border-bottom:1px solid #e8e8e8;color:#666666;font-size:13px;font-weight:400;line-height:20px">${escapeHtml(label)}</th>
    <td valign="top" style="padding:12px 0;border-bottom:1px solid #e8e8e8;color:#202020;font-size:14px;line-height:20px;overflow-wrap:anywhere;word-break:break-word">${escapeHtml(value)}</td>
  </tr>`;
}

function requestSummary(request: QuoteRequest): string {
  const serviceRows = services(request).map((label) => `<tr><td style="padding:8px 0;font-size:14px;line-height:21px;color:#202020"><span style="color:${ORANGE};font-weight:bold">•</span>&nbsp; ${escapeHtml(label)}</td></tr>`).join("");
  const contactRows = [
    ["Nom", `${request.firstName} ${request.lastName}`],
    ["Téléphone", request.phone],
    ["Courriel", request.email],
  ].map(([label, value]) => detailRow(label, value)).join("");
  const message = escapeHtml(request.message?.trim() || "Aucun message ajouté.").replace(/\r\n|\r|\n/g, "<br>");
  return `
    <h2 style="margin:0 0 18px;font-size:18px;line-height:25px;color:#202020">Récapitulatif de la demande</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;table-layout:fixed;background:#f5f5f5;border-left:4px solid ${ORANGE}">
      <tr><td style="padding:20px">
        <p style="margin:0 0 8px;font-size:10px;line-height:16px;letter-spacing:1.8px;font-weight:bold;color:#666666">VÉHICULE</p>
        <p style="margin:0 0 6px;font-size:19px;line-height:27px;font-weight:bold;color:#202020;overflow-wrap:anywhere;word-break:break-word">${escapeHtml(vehicle(request))}</p>
        <p style="margin:0;font-size:13px;line-height:20px;color:#666666;overflow-wrap:anywhere">Couleur : ${escapeHtml(request.vehicleColor?.trim() || "Non précisée")}</p>
      </td></tr>
    </table>
    <h3 style="margin:24px 0 4px;font-size:11px;line-height:18px;letter-spacing:1.4px;color:#666666">SERVICES DEMANDÉS</h3>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${serviceRows}</table>
    <h3 style="margin:24px 0 4px;font-size:11px;line-height:18px;letter-spacing:1.4px;color:#666666">COORDONNÉES</h3>
    <table width="100%" cellpadding="0" cellspacing="0" aria-label="Coordonnées du demandeur" style="border-collapse:collapse;table-layout:fixed">${contactRows}</table>
    <h3 style="margin:24px 0 12px;font-size:11px;line-height:18px;letter-spacing:1.4px;color:#666666">MESSAGE</h3>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;table-layout:fixed;background:#f5f5f5">
      <tr><td style="padding:18px;font-size:14px;line-height:23px;color:#444444;overflow-wrap:anywhere;word-break:break-word">${message}</td></tr>
    </table>`;
}

function textSummary(request: QuoteRequest): string {
  return `RÉCAPITULATIF DE LA DEMANDE

Véhicule : ${vehicle(request)}
Couleur : ${request.vehicleColor?.trim() || "Non précisée"}
Services : ${services(request).join(", ")}
Nom : ${request.firstName} ${request.lastName}
Téléphone : ${request.phone}
Courriel : ${request.email}

Message :
${request.message?.trim() || "Aucun message ajouté."}`;
}

function button(label: string, href: string, secondary = false): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:12px">
    <tr><td align="center" bgcolor="${secondary ? "#202020" : ORANGE}" style="border-radius:4px">
      <a href="${escapeHtml(href)}" style="display:block;border:14px solid ${secondary ? "#202020" : ORANGE};border-radius:4px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;font-weight:bold;text-align:center;color:${secondary ? "#ffffff" : "#161616"};text-decoration:none">${escapeHtml(label)}</a>
    </td></tr>
  </table>`;
}

function brandedEmail(preheader: string, label: string, content: string, footerNote: string): string {
  // Email-safe tables and inline styles; no scripts, tracking images or remote fonts.
  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>${escapeHtml(preheader)}</title>
  <style>
    body { margin:0 !important; padding:0 !important; }
    table { mso-table-lspace:0pt; mso-table-rspace:0pt; }
    @media only screen and (max-width:480px) {
      .outer-pad { padding:12px 8px !important; }
      .content-pad { padding:28px 20px !important; }
      .brand-pad { padding:24px 20px !important; }
      .email-title { font-size:26px !important; line-height:32px !important; }
    }
  </style>
</head>
<body bgcolor="#eeeeee" style="margin:0;padding:0;background:#eeeeee;font-family:Arial,Helvetica,sans-serif;color:#202020;-webkit-text-size-adjust:100%">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#eeeeee">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#eeeeee" style="border-collapse:collapse">
    <tr><td align="center" class="outer-pad" style="padding:32px 12px">
      <!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="max-width:600px;border-collapse:collapse;table-layout:fixed;background:#ffffff">
        <tr><td bgcolor="#1b1b1b" class="brand-pad" style="padding:28px 36px;border-bottom:4px solid ${ORANGE}">
          <a href="https://perfecteinte.ca/" style="display:inline-block;text-decoration:none">
            <img src="${EMAIL_LOGO_URL}" width="300" height="63" alt="Perfecteinte — Vitres teintées et pare-pierre" border="0" style="display:block;width:300px;max-width:100%;height:auto;border:0;color:#ffffff;font-size:18px">
          </a>
        </td></tr>
        <tr><td class="content-pad" style="padding:36px">
          <p style="margin:0 0 14px;font-size:10px;line-height:16px;letter-spacing:1.8px;font-weight:bold;color:#ad5100">${escapeHtml(label)}</p>
          ${content}
        </td></tr>
        <tr><td class="content-pad" bgcolor="#f6f6f6" style="padding:24px 36px;border-top:1px solid #e8e8e8">
          <p style="margin:0 0 7px;font-size:13px;line-height:20px;font-weight:bold;color:#202020"><a href="https://perfecteinte.ca/" style="color:#202020;text-decoration:none">Perfecteinte · Alma</a></p>
          <p style="margin:0 0 7px;font-size:12px;line-height:20px;color:#666666">1950 Boulevard St-Jude, Alma, QC<br><a href="tel:+14184503990" style="color:#444444;text-decoration:underline">(418) 450-3990</a> · <a href="mailto:Perfecteinte@hotmail.ca" style="color:#444444;text-decoration:underline">Perfecteinte@hotmail.ca</a></p>
          <p style="margin:14px 0 0;font-size:11px;line-height:18px;color:#666666">${escapeHtml(footerNote)}</p>
        </td></tr>
      </table>
      <!--[if mso]></td></tr></table><![endif]-->
    </td></tr>
  </table>
</body>
</html>`;
}

export function buildCustomerConfirmationEmail(request: QuoteRequest, recipientEmail: string): EmailDraft {
  const content = `
    <h1 class="email-title" style="margin:0 0 20px;font-size:30px;line-height:37px;letter-spacing:-0.7px;color:#202020">Votre demande est<br>prise en charge.</h1>
    <p style="margin:0 0 12px;font-size:15px;line-height:25px;color:#444444">Bonjour ${escapeHtml(request.firstName)},</p>
    <p style="margin:0 0 24px;font-size:15px;line-height:25px;color:#444444">Merci de faire confiance à Perfecteinte. Nous avons bien reçu votre demande de soumission. Notre équipe va l’étudier et vous contacter pour discuter de vos besoins.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#fff3e7;margin-bottom:30px">
      <tr><td style="padding:18px 20px;font-size:14px;line-height:23px;color:#202020"><strong>Une réponse dans les 24 à 48 heures.</strong><br>Voici une copie des renseignements que vous nous avez transmis.</td></tr>
    </table>
    ${requestSummary(request)}
    <h2 style="margin:30px 0 8px;font-size:18px;line-height:25px;color:#202020">Une précision à ajouter ?</h2>
    <p style="margin:0 0 16px;font-size:14px;line-height:23px;color:#444444">Répondez simplement à ce courriel ou utilisez le bouton ci-dessous. Nous ajouterons vos précisions à votre demande.</p>
    ${button("Écrire à notre équipe", `mailto:${encodeURIComponent(recipientEmail)}`)}
    <p style="margin:24px 0 0;font-size:14px;line-height:23px;color:#444444">À bientôt,<br><strong>L’équipe Perfecteinte</strong></p>`;
  return {
    to: request.email,
    replyTo: recipientEmail,
    subject: "Votre demande est prise en charge | Perfecteinte",
    html: brandedEmail("Demande reçue. Nous vous répondrons dans les 24 à 48 heures.", "CONFIRMATION DE VOTRE DEMANDE", content, "Cette confirmation atteste la réception de votre demande. Elle ne constitue pas une soumission chiffrée ni un rendez-vous confirmé."),
    text: `PERFECTEINTE — VITRES TEINTÉES & PARE-PIERRE

Bonjour ${request.firstName},

Votre demande est prise en charge. Merci de faire confiance à Perfecteinte.
Notre équipe vous répondra dans un délai de 24 à 48 heures.

${textSummary(request)}

Une précision à ajouter ? Répondez simplement à ce courriel.

À bientôt,
L’équipe Perfecteinte
https://perfecteinte.ca/
(418) 450-3990
1950 Boulevard St-Jude, Alma, QC

Cette confirmation ne constitue pas une soumission chiffrée ni un rendez-vous confirmé.`,
  };
}

export function buildOwnerNotificationEmail(request: QuoteRequest, recipientEmail: string): EmailDraft {
  const digits = request.phone.replace(/\D/g, "");
  const phone = digits.length === 10 ? `+1${digits}` : digits;
  const content = `
    <h1 class="email-title" style="margin:0 0 20px;font-size:30px;line-height:37px;letter-spacing:-0.7px;color:#202020">Nouvelle demande<br>de soumission.</h1>
    <p style="margin:0 0 24px;font-size:15px;line-height:25px;color:#444444"><strong>${escapeHtml(`${request.firstName} ${request.lastName}`)}</strong> souhaite obtenir une soumission auprès de Perfecteinte. Voici tous les renseignements nécessaires pour faire le suivi.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#fff3e7;margin-bottom:30px">
      <tr><td style="padding:18px 20px;font-size:14px;line-height:23px;color:#202020"><strong>Suivi client à effectuer</strong><br>Le délai de réponse annoncé au client est de 24 à 48 heures.</td></tr>
    </table>
    ${requestSummary(request)}
    <h2 style="margin:30px 0 8px;font-size:18px;line-height:25px;color:#202020">Contacter le client</h2>
    <p style="margin:0 0 16px;font-size:14px;line-height:23px;color:#444444">Répondez directement à ce courriel ou choisissez un moyen de contact ci-dessous.</p>
    ${button("Répondre au client", `mailto:${encodeURIComponent(request.email)}`)}
    ${phone ? button("Appeler le client", `tel:${phone}`, true) : ""}`;
  return {
    to: recipientEmail,
    replyTo: request.email,
    subject: "Nouvelle demande de soumission | Perfecteinte",
    html: brandedEmail("Nouvelle soumission : coordonnées, véhicule et services demandés.", "NOTIFICATION PROPRIÉTAIRE", content, "Notification automatique du formulaire de soumission Perfecteinte. Les réponses à ce courriel sont adressées directement au client."),
    text: `PERFECTEINTE — NOUVELLE DEMANDE DE SOUMISSION

Une demande de ${request.firstName} ${request.lastName} attend votre suivi.
Le délai de réponse annoncé au client est de 24 à 48 heures.

${textSummary(request)}

Répondez directement à ce courriel pour joindre le client.
Courriel : ${request.email}
Téléphone : ${request.phone}
https://perfecteinte.ca/`,
  };
}
