import { useRef, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { Check, ChevronRight, Hexagon, Loader2 } from "lucide-react"
import { createCheckoutSession } from "@/lib/api"

const plans = [
  {
    name: "Starter Simulation",
    tagline: "Core digital twin capabilities",
    price: "$99",
    period: "/month",
    description: "Ideal for small teams exploring digital twin technology and single-line monitoring.",
    features: [
      "Up to 500 sensor connections",
      "Basic simulation models",
      "1 digital twin instance",
      "Standard dashboards",
      "Email support (48h)",
      "Community access",
    ],
    ctaLabel: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Industrial Pro",
    tagline: "Full simulation engine + AI",
    price: "$159",
    period: "/month",
    description: "Built for engineering teams that need real-time simulation, AI predictions, and full operational visibility.",
    features: [
      "Up to 10,000 sensor connections",
      "Advanced physics simulation",
      "Unlimited digital twins",
      "Real-time AI predictive modeling",
      "Real-time dashboards at 60 FPS",
      "Smart alerting with ML suppression",
      "Priority support (4h)",
      "API access & webhooks",
    ],
    ctaLabel: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise Scale",
    tagline: "Custom infrastructure + SLA",
    price: "Custom",
    period: "",
    description: "For large-scale industrial operations requiring dedicated simulation infrastructure and enterprise SLAs.",
    features: [
      "Unlimited sensor connections",
      "Custom simulation models",
      "Multi-plant deployment",
      "Dedicated simulation nodes",
      "Custom integrations with ERP/SCADA",
      "On-premise deployment option",
      "24/7 dedicated support",
      "Custom SLA & compliance certification",
      "Dedicated solution engineer",
    ],
    ctaLabel: "Contact Sales",
    highlighted: false,
  },
]

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const navigate = useNavigate()
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null)

  const handleCheckout = useCallback(async (planName: string) => {
    if (planName === "Enterprise Scale") {
      navigate("/contact")
      return
    }
    setLoadingPlan(planName)
    try {
      const { url } = await createCheckoutSession(planName)
      window.location.href = url
    } catch (err) {
      const { toast } = await import("sonner")
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      toast.error(message, {
        description: "Unable to start the checkout process.",
      })
      console.error("[Pricing Checkout]", err)
    } finally {
      setLoadingPlan(null)
    }
  }, [navigate])

  return (
    <section className="relative py-16 md:py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[700px] aspect-square blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(42,107,219,0.05), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-primary/30 bg-primary/5 cyber-chamfer-sm"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <span className="w-1 h-1 rounded-full bg-primary animate-blink" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">// Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            CHOOSE YOUR{" "}
            <span className="gradient-text text-glow-blue">SIMULATION TIER</span>
          </h2>
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto leading-relaxed tracking-wide"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Flexible plans built for industrial teams. Scale from single-line monitoring to
            enterprise-wide digital twin infrastructure.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative flex flex-col overflow-hidden transition-all duration-300 feature-card-hover
                ${plan.highlighted
                  ? 'hud-panel border-accent/40 md:-translate-y-3 md:scale-[1.03] z-10'
                  : 'hud-panel border-primary/20 hover:border-primary/40'
                }`}
            >
              {/* Highlighted glow */}
              {plan.highlighted && (
                <>
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,196,232,0.08), transparent 70%)' }} />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-px bg-accent/80 blur-sm" />
                </>
              )}

              {/* Corner accents */}
              <div className={`absolute top-0 left-0 w-5 h-5 border-t border-l transition-all duration-300 ${
                plan.highlighted ? 'border-accent/50' : 'border-primary/0 group-hover:border-primary/60'
              }`} />
              <div className={`absolute bottom-0 right-0 w-5 h-5 border-b border-r transition-all duration-300 ${
                plan.highlighted ? 'border-primary/40' : 'border-accent/0 group-hover:border-accent/50'
              }`} />

              <div className="relative p-6 md:p-7 flex flex-col flex-1">
                {/* Badge */}
                {plan.highlighted && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-accent/40 bg-accent/10 mb-5 w-fit">
                    <Hexagon className="w-2.5 h-2.5 text-accent" strokeWidth={2} />
                    <span className="text-[8px] font-bold tracking-[0.25em] uppercase text-accent" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Name */}
                <h3 className="text-sm font-black tracking-wider uppercase mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {plan.name}
                </h3>
                <p className="text-[10px] text-muted-foreground tracking-wide mb-5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-5">
                  <span className={`text-3xl md:text-4xl font-black ${plan.highlighted ? 'gradient-text' : 'text-foreground/90'}`}
                    style={{ fontFamily: 'Orbitron, monospace' }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-xs text-muted-foreground ml-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[11px] text-muted-foreground leading-relaxed tracking-wide mb-6"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {plan.description}
                </p>

                {/* Features */}
                <div className="flex-1 space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Check className={`w-3 h-3 mt-0.5 shrink-0 ${
                        plan.highlighted ? 'text-accent' : 'text-primary'
                      }`} strokeWidth={2} />
                      <span className="text-[11px] text-muted-foreground tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleCheckout(plan.name)}
                  disabled={loadingPlan !== null}
                  className={`w-full group relative cyber-chamfer text-xs font-bold tracking-widest uppercase px-6 py-3 transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed ${
                    plan.highlighted
                      ? 'btn-shimmer border border-accent/60 hover:border-accent text-accent hover:glow-cyan'
                      : 'border border-primary/40 hover:border-primary text-primary hover:glow-blue bg-primary/5 hover:bg-primary/10'
                  }`}
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {loadingPlan === plan.name ? (
                    <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                  ) : (
                    <>
                      <span className="relative z-10">{plan.ctaLabel}</span>
                      <ChevronRight className="w-3 h-3 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                      plan.highlighted ? 'via-accent/60' : 'via-primary/50'
                    } to-transparent animate-beam`} />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
