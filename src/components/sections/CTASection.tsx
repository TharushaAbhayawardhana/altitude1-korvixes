import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronRight, Mail, Terminal } from "lucide-react"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(42,107,219,0.07) 0%, transparent 70%)'
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Terminal indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-primary/30 bg-primary/5 cyber-chamfer-sm">
            <Terminal className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Get Started Today
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            READY TO EXPLORE{" "}
            <span className="gradient-text text-glow-blue block md:inline">INDUSTRIAL INTELLIGENCE?</span>
          </h2>

          {/* Terminal-style subtext */}
          <div className="max-w-2xl mx-auto mb-10 hud-panel p-4 text-left">
            <p className="text-[11px] leading-relaxed tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#3BC4E8' }}>
              <span className="text-primary/70 mr-2">&gt;</span>
              Join 180+ industrial teams who have already transformed their operations with
              Korvixes digital twin technology.
            </p>
            <p className="text-[11px] leading-relaxed tracking-wide mt-1" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#3BC4E8' }}>
              <span className="text-primary/70 mr-2">&gt;</span>
              Start with a free platform demo.
              <span className="inline-block w-2 h-3.5 bg-accent ml-1 animate-blink-cursor align-middle" />
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="group relative cyber-chamfer bg-primary/15 border border-primary/60 hover:border-primary hover:bg-primary/25 hover:glow-blue text-primary text-sm font-bold tracking-widest uppercase px-10 py-4 transition-all duration-200 flex items-center gap-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span>Request Demo</span>
              <ChevronRight className="w-4 h-4" />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent animate-beam" />
              </div>
            </button>
            <button
              className="cyber-chamfer border border-border/50 hover:border-accent/50 bg-transparent hover:bg-accent/5 text-muted-foreground hover:text-accent text-sm font-bold tracking-widest uppercase px-10 py-4 transition-all duration-200 flex items-center gap-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-0 divide-x divide-border/30"
        >
          {[
            "No credit card required",
            "14-day free trial",
            "Enterprise SLA available",
            "ISO 27001 compliant",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[10px] text-muted-foreground px-6 py-1"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="text-primary/50">▸</span>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
