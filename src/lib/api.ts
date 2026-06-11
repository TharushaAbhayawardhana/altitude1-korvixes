const PAYMENT_LINKS: Record<string, string | undefined> = {
  "Starter Simulation": import.meta.env.VITE_STRIPE_PAYMENT_LINK_STARTER,
  "Industrial Pro": import.meta.env.VITE_STRIPE_PAYMENT_LINK_INDUSTRIAL_PRO,
}

interface CheckoutSessionResponse {
  url: string
  sessionId: string
}

export async function createCheckoutSession(
  planName: string
): Promise<CheckoutSessionResponse> {
  const paymentLink = PAYMENT_LINKS[planName]
  if (paymentLink) {
    return { url: paymentLink, sessionId: "" }
  }

  throw new Error("Payment is not configured for this plan.")
}
