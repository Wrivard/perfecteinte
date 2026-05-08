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

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `Nouvelle soumission — ${fullName} (${vehicleMake} ${vehicleModel})`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Échec de l'envoi du courriel." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return res.status(500).json({ error: "Erreur serveur inattendue." });
  }
}
