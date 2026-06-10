import { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { CheckCircle, ChevronRight, Hexagon } from "lucide-react"
import { PageLayout } from "@/components/layout/PageLayout"

export function PaymentSuccessPage() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    if (countdown <= 0) return
    const timer = setInterval(() => setCountdown((c) => c - 1), 1000)
    return () => clearInterval(timer)
  }, [countdown])

  return (
    <PageLayout
      title="Payment Successful"
      subtitle="Your subscription has been activated"
      badge="// DONE"
      backHref="/"
    >
      <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-8">
          <CheckCircle className="w-10 h-10 text-green-400" strokeWidth={1.5} />
        </div>

        <h2
          className="text-2xl md:text-3xl font-black gradient-text mb-4"
          style={{ fontFamily: "Orbitron, monospace" }}
        >
          SUBSCRIPTION ACTIVE
        </h2>

        <p
          className="text-sm text-muted-foreground max-w-md leading-relaxed mb-8"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          Your digital twin simulation plan is now live. You can access your
          dashboard and start building your virtual infrastructure immediately.
        </p>

        {sessionId && (
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 bg-primary/5 mb-10 cyber-chamfer-sm">
            <Hexagon className="w-3 h-3 text-primary" strokeWidth={2} />
            <span
              className="text-[10px] text-muted-foreground tracking-wide"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              SESSION: {sessionId.slice(0, 16)}...
            </span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://app.korvixes.one/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 btn-shimmer border border-accent/60 text-accent cyber-chamfer text-xs font-bold tracking-widest uppercase hover:glow-cyan transition-all duration-200"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Go to Dashboard
            <ChevronRight className="w-3 h-3" />
          </a>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-primary cyber-chamfer text-xs font-bold tracking-widest uppercase hover:glow-blue bg-primary/5 hover:bg-primary/10 transition-all duration-200"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Back to Home
          </Link>
        </div>

        <p
          className="text-[10px] text-muted-foreground mt-8 tracking-wide"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          Redirecting to dashboard in {countdown}s
        </p>
      </div>
    </PageLayout>
  )
}
