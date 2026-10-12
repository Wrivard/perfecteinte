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

function logFailure(event: string, code: string): void {
  const runtime = globalThis as typeof globalThis & {
    console: { error(message: string): void };
  };
  runtime.console.error(JSON.stringify({ event, code }));
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

  let service: typeof import("../artifacts/api-server/src/lib/quote-email.js");
  try {
    service = await import("../artifacts/api-server/src/lib/quote-email.js");
  } catch (error) {
    // Never log submitted data, credentials, or provider response bodies.
    const code = error && typeof error === "object" && "code" in error
      ? String(error.code) : "UNKNOWN";
    logFailure("quote_service_load_failed", code);
    res.status(500).json({
      error: "Le service de soumission est temporairement indisponible. Appelez-nous au (418) 450-3990.",
      code: "QUOTE_SERVICE_LOAD_FAILED",
    });
    return;
  }

  try {
    const response = await service.submitQuoteRequest(req.body, resendConfig());
    res.status(200).json(response);
  } catch (error) {
    if (error instanceof service.QuoteEmailError) {
      res.status(error.status).json({ error: error.message });
      return;
    }

    logFailure("quote_request_failed", "UNEXPECTED_ERROR");
    res.status(500).json({
      error: "Une erreur est survenue. Réessayez ou appelez le (418) 450-3990.",
      code: "QUOTE_REQUEST_FAILED",
    });
  }
}
