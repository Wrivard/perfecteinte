import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

interface ContactPayload {
  services?: string[];
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  vehicleColor?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;color:#374151;width:160px;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;color:#111827;">${escapeHtml(value)}</td></tr>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const recipientEmail = process.env.RECIPIENT_EMAIL;

  if (!apiKey || !fromEmail || !recipientEmail) {
    console.error("Missing required env vars: RESEND_API_KEY, RESEND_FROM_EMAIL, or RECIPIENT_EMAIL");
    return res.status(500).json({ error: "Configuration serveur manquante." });
  }

  const data = (req.body ?? {}) as ContactPayload;

  const services = Array.isArray(data.services) ? data.services : [];
  const firstName = (data.firstName ?? "").trim();
  const lastName = (data.lastName ?? "").trim();
  const email = (data.email ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const vehicleMake = (data.vehicleMake ?? "").trim();
  const vehicleModel = (data.vehicleModel ?? "").trim();
  const vehicleYear = (data.vehicleYear ?? "").trim();
  const vehicleColor = (data.vehicleColor ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!firstName || !lastName || !email || !phone || !vehicleMake || !vehicleModel || !vehicleYear || services.length === 0) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Adresse courriel invalide." });
  }

  const fullName = `${firstName} ${lastName}`;
  const vehicle = [vehicleYear, vehicleMake, vehicleModel, vehicleColor].filter(Boolean).join(" ");
  const servicesList = services.map((s) => `<li>${escapeHtml(s)}</li>`).join("");

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:640px;margin:0 auto;color:#111827;">
      <h2 style="color:#0f172a;border-bottom:2px solid #3b82f6;padding-bottom:8px;">Nouvelle demande de soumission</h2>
      <p style="color:#6b7280;font-size:14px;">Reçue via le formulaire en ligne du site esthetiqueautopascalpilote.com</p>
      <table style="border-collapse:collapse;width:100%;margin-top:16px;font-size:14px;">
        ${row("Nom", fullName)}
        ${row("Téléphone", phone)}
        ${row("Courriel", email)}
        ${row("Véhicule", vehicle)}
      </table>
      <h3 style="margin-top:24px;color:#0f172a;">Services demandés</h3>
      <ul style="font-size:14px;color:#111827;">${servicesList}</ul>
      ${message ? `<h3 style="margin-top:24px;color:#0f172a;">Message du client</h3><p style="font-size:14px;white-space:pre-wrap;background:#f9fafb;padding:12px;border-radius:6px;border:1px solid #e5e7eb;">${escapeHtml(message)}</p>` : ""}
    </div>
  `;

  const text = [
    "Nouvelle demande de soumission",
    "",
    `Nom: ${fullName}`,
    `Téléphone: ${phone}`,
    `Courriel: ${email}`,
    `Véhicule: ${vehicle}`,
    "",
    "Services demandés:",
    ...services.map((s) => `  - ${s}`),
    ...(message ? ["", "Message du client:", message] : []),
  ].join("\n");

  const clientHtml = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:640px;margin:0 auto;color:#111827;">
      <div style="background:#0f172a;padding:24px;text-align:center;border-radius:8px 8px 0 0;">
        <h1 style="color:#ffffff;margin:0;font-size:22px;letter-spacing:1px;">ESTHÉTIQUE AUTO PASCAL PILOTE</h1>
        <p style="color:#93c5fd;margin:6px 0 0;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Détailing automobile · La Malbaie</p>
      </div>
      <div style="background:#ffffff;padding:32px 24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
        <h2 style="color:#0f172a;margin:0 0 12px;font-size:20px;">Bonjour ${escapeHtml(firstName)},</h2>
        <p style="font-size:15px;line-height:1.6;color:#374151;">
          Merci pour votre demande de soumission ! Nous avons bien reçu votre formulaire et un membre de notre équipe vous contactera dans les meilleurs délais pour confirmer les détails et planifier votre rendez-vous.
        </p>
        <h3 style="margin-top:24px;color:#0f172a;font-size:16px;border-bottom:2px solid #3b82f6;padding-bottom:6px;">Récapitulatif de votre demande</h3>
        <table style="border-collapse:collapse;width:100%;margin-top:12px;font-size:14px;">
          ${row("Véhicule", vehicle)}
          ${row("Téléphone", phone)}
          ${row("Courriel", email)}
        </table>
        <h3 style="margin-top:24px;color:#0f172a;font-size:16px;border-bottom:2px solid #3b82f6;padding-bottom:6px;">Services demandés</h3>
        <ul style="font-size:14px;color:#111827;padding-left:20px;">${servicesList}</ul>
        ${message ? `<h3 style="margin-top:24px;color:#0f172a;font-size:16px;border-bottom:2px solid #3b82f6;padding-bottom:6px;">Votre message</h3><p style="font-size:14px;white-space:pre-wrap;background:#f9fafb;padding:12px;border-radius:6px;border:1px solid #e5e7eb;">${escapeHtml(message)}</p>` : ""}
        <div style="margin-top:32px;padding:20px;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
          <p style="margin:0 0 8px;font-size:14px;font-weight:600;color:#0f172a;">Une question ?</p>
          <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">
            📞 <a href="tel:4186655871" style="color:#2563eb;text-decoration:none;font-weight:600;">(418) 665-5871</a><br/>
            ✉️ <a href="mailto:Pascal.1993@live.ca" style="color:#2563eb;text-decoration:none;">Pascal.1993@live.ca</a><br/>
            📍 2535 boulevard Comporté, La Malbaie, Québec
          </p>
        </div>
        <p style="margin-top:24px;font-size:13px;color:#6b7280;text-align:center;">
          À très bientôt,<br/>
          <strong style="color:#0f172a;">L'équipe Esthétique Auto Pascal Pilote</strong>
        </p>
      </div>
      <p style="margin-top:16px;font-size:11px;color:#9ca3af;text-align:center;">
        Ce courriel vous a été envoyé suite à votre demande sur esthetiqueautopascalpilote.com
      </p>
    </div>
  `;

  const clientText = [
    `Bonjour ${firstName},`,
    "",
    "Merci pour votre demande de soumission ! Nous avons bien reçu votre formulaire et un membre de notre équipe vous contactera dans les meilleurs délais pour confirmer les détails.",
    "",
    "RÉCAPITULATIF DE VOTRE DEMANDE",
    `Véhicule: ${vehicle}`,
    `Téléphone: ${phone}`,
    `Courriel: ${email}`,
    "",
    "Services demandés:",
    ...services.map((s) => `  - ${s}`),
    ...(message ? ["", "Votre message:", message] : []),
    "",
    "Une question ?",
    "Téléphone: (418) 665-5871",
    "Courriel: Pascal.1993@live.ca",
    "Adresse: 2535 boulevard Comporté, La Malbaie, Québec",
    "",
    "À très bientôt,",
    "L'équipe Esthétique Auto Pascal Pilote",
  ].join("\n");

  try {
    const resend = new Resend(apiKey);

    const [internalResult, clientResult] = await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: recipientEmail,
        replyTo: email,
        subject: `Nouvelle soumission — ${fullName} (${vehicleMake} ${vehicleModel})`,
        html,
        text,
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        replyTo: recipientEmail,
        subject: "Confirmation de votre demande — Esthétique Auto Pascal Pilote",
        html: clientHtml,
        text: clientText,
      }),
    ]);

    if (internalResult.error) {
      console.error("Resend internal email error:", internalResult.error);
      return res.status(502).json({ error: "Échec de l'envoi du courriel." });
    }
    if (clientResult.error) {
      console.error("Resend client confirmation email error:", clientResult.error);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return res.status(500).json({ error: "Erreur serveur inattendue." });
  }
}
