const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ""

interface CheckoutSessionResponse {
  url: string
  sessionId: string
}

export async function createCheckoutSession(
  planName: string
): Promise<CheckoutSessionResponse> {
  const res = await fetch(`${API_BASE}/api/create-checkout-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ planName }),
  })

  if (!res.ok) {
    let message = `Request failed (${res.status})`
    try {
      const body = await res.json()
      if (body?.error) message = body.error
    } catch {
      // use default message
    }
    throw new Error(message)
  }

  return res.json()
}
