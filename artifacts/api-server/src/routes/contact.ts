import { Router, type IRouter } from "express";
import { QuoteEmailError, submitQuoteRequest } from "../lib/quote-email";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  try {
    const response = await submitQuoteRequest(req.body, {
      apiKey: process.env.RESEND_API_KEY,
      fromEmail: process.env.RESEND_FROM_EMAIL,
      recipientEmail: process.env.RECIPIENT_EMAIL,
    });
    res.status(200).json(response);
  } catch (error) {
    if (error instanceof QuoteEmailError) {
      if (error.status >= 500) {
        req.log.error({ status: error.status }, "Quote email delivery failed");
      }
      res.status(error.status).json({ error: error.message });
      return;
    }

    req.log.error({ err: error }, "Unexpected quote request failure");
    res.status(500).json({
      error: "Une erreur est survenue. Réessayez ou appelez le (418) 450-3990.",
    });
  }
});

export default router;
