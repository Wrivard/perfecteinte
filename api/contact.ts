import {
  QuoteEmailError,
  submitQuoteRequest,
} from "../artifacts/api-server/src/lib/quote-email";

type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponse;
  json(body: unknown): VercelResponse;
};

function resendConfig() {
  const runtime = globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  };
  return {
    apiKey: runtime.process?.env?.RESEND_API_KEY,
    fromEmail: runtime.process?.env?.RESEND_FROM_EMAIL,
    recipientEmail: runtime.process?.env?.RECIPIENT_EMAIL,
  };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Méthode non autorisée." });
    return;
  }

  try {
    const response = await submitQuoteRequest(req.body, resendConfig());
    res.status(200).json(response);
  } catch (error) {
    if (error instanceof QuoteEmailError) {
      res.status(error.status).json({ error: error.message });
      return;
    }

    res.status(500).json({
      error: "Une erreur est survenue. Réessayez ou appelez le (418) 450-3990.",
    });
  }
}
