import { loadStripe } from "@stripe/stripe-js"

let stripePromise: ReturnType<typeof loadStripe> | null = null

export function getStripe() {
  if (stripePromise) return stripePromise

  const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

  if (!key) {
    console.error("[Stripe] Missing VITE_STRIPE_PUBLISHABLE_KEY environment variable")
    return null
  }

  if (!key.startsWith("pk_")) {
    console.error("[Stripe] Invalid publishable key format — expected key starting with pk_")
    return null
  }

  stripePromise = loadStripe(key)
  return stripePromise
}
