import "dotenv/config"
import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import cors from "cors"
import Stripe from "stripe"

// ── Path setup for static serving ──
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.resolve(__dirname, "..", "dist")

// ── Startup validation ──
const SECRET_KEY = process.env.STRIPE_SECRET_KEY
if (!SECRET_KEY) {
  console.error("[Stripe Server] FATAL: STRIPE_SECRET_KEY is not set in .env")
  process.exit(1)
}

const stripe = new Stripe(SECRET_KEY, {
  apiVersion: "2026-05-27.dahlia",
})

const PRICE_MAP = {
  "Starter Simulation": process.env.STRIPE_PRICE_STARTER,
  "Industrial Pro": process.env.STRIPE_PRICE_INDUSTRIAL_PRO,
}

const VALID_PLANS = Object.keys(PRICE_MAP)

console.log("[Stripe Server] Price mapping:")
for (const [plan, price] of Object.entries(PRICE_MAP)) {
  const status = price?.startsWith("price_") ? "OK" : "⚠️  NOT CONFIGURED"
  console.log(`  ${plan} → ${price ?? "(empty)"}  [${status}]`)
}

const app = express()
app.use(cors())
app.use(express.json())

// ── Serve production build ──
app.use(express.static(distPath, {
  maxAge: "1y",
  immutable: true,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".html")) {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    }
  },
}))

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { planName } = req.body

    // Validate planName exists in body
    if (!planName || typeof planName !== "string") {
      console.warn(`[Stripe Server] 400 — missing planName in body`)
      res.status(400).json({ error: "Missing plan name in request body" })
      return
    }

    // Validate planName is one of our known plans
    if (!VALID_PLANS.includes(planName)) {
      console.warn(`[Stripe Server] 400 — unknown plan "${planName}"`)
      res.status(400).json({
        error: `Unknown plan "${planName}". Valid plans: ${VALID_PLANS.join(", ")}`,
      })
      return
    }

    // Validate price ID is configured
    const priceId = PRICE_MAP[planName]
    if (!priceId || !priceId.startsWith("price_")) {
      console.error(`[Stripe Server] 500 — no valid price ID for "${planName}" (got "${priceId}")`)
      res.status(500).json({
        error: `Stripe price ID is not configured for "${planName}". Contact support.`,
      })
      return
    }

    console.log(`[Stripe Server] Creating session → plan="${planName}" price="${priceId}"`)

    const origin = req.headers.origin ?? "http://localhost:5173"

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      metadata: { planName },
      allow_promotion_codes: true,
    })

    console.log(`[Stripe Server] Session created: ${session.id}`)
    res.json({ url: session.url, sessionId: session.id })
  } catch (err) {
    const message =
      err instanceof Stripe.errors.StripeError
        ? err.message
        : "Failed to create checkout session. Please try again."
    console.error("[Stripe Server] Stripe API error:", message)
    res.status(500).json({ error: message })
  }
})

// ── SPA fallback: serve index.html for all non-API, non-file routes ──
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/")) {
    res.status(404).json({ error: "Not found" })
    return
  }
  res.sendFile(path.join(distPath, "index.html"))
})

const PORT = process.env.PORT ?? 3001
app.listen(PORT, () => {
  console.log(`[Stripe Server] Listening on http://localhost:${PORT}`)
  console.log(`[Static] Serving from ${distPath}`)
})
