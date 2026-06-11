import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import featIcon1 from "@/assets/features/6.svg"
import featIcon2 from "@/assets/features/7.svg"
import featIcon3 from "@/assets/features/8.svg"
import featIcon4 from "@/assets/features/9.svg"
import featIcon5 from "@/assets/features/10.svg"
import featIcon6 from "@/assets/features/11.svg"
import featIcon7 from "@/assets/features/12.svg"
import featIcon8 from "@/assets/features/13.svg"

const features = [
  { iconSrc: featIcon1, title: "Real-time Simulation Engine", description: "Physics-accurate models run in parallel with live operations. Predict system behavior at sub-millisecond resolution.", tag: "CORE ENGINE", accentColor: "primary" },
  { iconSrc: featIcon2, title: "Industrial System Monitoring", description: "Continuous telemetry from thousands of sensors. Visualize temperature, pressure, flow, and vibration in one unified view.", tag: "MONITORING", accentColor: "accent" },
  { iconSrc: featIcon3, title: "Predictive Behavior Modeling", description: "Machine learning models trained on historical failure patterns detect anomalies days before they become critical.", tag: "MODELING", accentColor: "primary" },
  { iconSrc: featIcon4, title: "Machine Performance Visualization", description: "Rich dashboards for every machine in your facility. OEE, availability, performance, and quality scores at a glance.", tag: "ANALYTICS", accentColor: "accent" },
  { iconSrc: featIcon5, title: "Smart Alerts and Notifications", description: "Configurable thresholds with intelligent suppression. Route alerts to the right engineer via email, SMS, or webhook.", tag: "ALERTING", accentColor: "accent" },
  { iconSrc: featIcon6, title: "Multi-layer System Modeling", description: "Model entire production chains — from individual sensors up to plant-wide energy flows. Full hierarchy support.", tag: "MODELING", accentColor: "primary" },
  { iconSrc: featIcon7, title: "Fault Isolation & Root Cause", description: "When anomalies occur, Korvixes traces the causal chain automatically. Know exactly what caused the fault and why.", tag: "DIAGNOSTICS", accentColor: "accent" },
  { iconSrc: featIcon8, title: "Data-Driven Decision Insights", description: "Operational recommendations backed by simulation evidence. Shift from gut decisions to engineering-grade insights.", tag: "INTELLIGENCE", accentColor: "primary" },
]

export function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="features" className="relative py-16 md:py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,196,232,0.05), transparent)' }} />
      <div className="absolute left-0 bottom-0 w-1/2 max-w-[300px] aspect-square blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(42,107,219,0.04), transparent)' }} />

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
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">// Platform Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            BUILT FOR INDUSTRIAL{" "}
            <span className="gradient-text text-glow-blue">ENGINEERING TEAMS</span>
          </h2>
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto leading-relaxed tracking-wide"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Every feature is designed around the real-world demands of plant engineers,
            operations managers, and data scientists.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border/40">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative p-6 cursor-default overflow-hidden transition-all duration-300 hover:bg-primary/5 feature-card-hover border-b border-border/40
                ${i >= 7 ? 'max-sm:border-b-0' : ''}
                ${i >= 6 ? 'sm:border-b-0' : ''}
                ${i >= 4 ? 'lg:border-b-0' : ''}
                ${i % 2 === 0 ? 'sm:border-r sm:border-border/40' : ''}
                ${i % 4 !== 3 ? 'lg:border-r lg:border-border/40' : ''}
              `}
            >
              {/* Hover ambient glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: feature.accentColor === 'accent'
                  ? 'radial-gradient(ellipse at 30% 30%, rgba(59,196,232,0.06), transparent 70%)'
                  : 'radial-gradient(ellipse at 30% 30%, rgba(42,107,219,0.07), transparent 70%)'
                }} />

              {/* Hover beam top */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100">
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                  feature.accentColor === 'accent' ? 'via-accent/70' : 'via-primary/70'
                } to-transparent animate-beam`} />
              </div>

              {/* Corner accents */}
              <div className={`absolute top-0 left-0 w-5 h-5 border-t border-l transition-all duration-300 ${
                feature.accentColor === 'accent' ? 'border-accent/0 group-hover:border-accent/80' : 'border-primary/0 group-hover:border-primary/80'
              }`} />
              <div className={`absolute bottom-0 right-0 w-5 h-5 border-b border-r transition-all duration-300 ${
                feature.accentColor === 'accent' ? 'border-primary/0 group-hover:border-primary/60' : 'border-accent/0 group-hover:border-accent/60'
              }`} />

              {/* Tag */}
              <span className={`text-[9px] font-bold tracking-[0.2em] mb-4 block transition-colors duration-200 ${
                feature.accentColor === 'accent'
                  ? 'text-accent/50 group-hover:text-accent/90'
                  : 'text-primary/50 group-hover:text-primary/90'
              }`}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {`// ${feature.tag}`}
              </span>

              {/* Icon */}
              <div className={`relative w-14 h-14 cyber-chamfer-sm flex items-center justify-center mb-5 transition-all duration-300 ${
                feature.accentColor === 'accent'
                  ? 'bg-accent/10 border border-accent/25 group-hover:bg-accent/25 group-hover:border-accent/60 group-hover:glow-cyan-sm'
                  : 'bg-primary/10 border border-primary/25 group-hover:bg-primary/25 group-hover:border-primary/60 group-hover:glow-blue-sm'
              }`}>
                <div className={`absolute inset-0 opacity-40 blur-sm rounded-sm transition-opacity duration-300 ${
                  feature.accentColor === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                }`} />
                <img src={feature.iconSrc} alt="" className="w-8 h-8 object-contain relative z-10" />
              </div>

              <h3 className="font-bold text-sm mb-3 leading-snug uppercase tracking-wide text-foreground transition-colors" style={{ fontFamily: 'Orbitron, monospace' }}>
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed tracking-wide transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
