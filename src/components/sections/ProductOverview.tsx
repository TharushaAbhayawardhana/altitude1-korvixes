import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Binary, Network, BarChart3 } from "lucide-react"

const pillars = [
  {
    icon: Binary,
    title: "What is a Digital Twin?",
    description:
      "A digital twin is a real-time virtual replica of a physical industrial system. Every sensor, valve, motor, and pipeline is mirrored in software — allowing engineers to see exactly what's happening without stepping on the factory floor.",
    metric: "1:1",
    metricLabel: "Physical-to-digital mapping",
    color: "primary",
    tag: "CONCEPT",
  },
  {
    icon: Network,
    title: "Why It Matters",
    description:
      "Traditional monitoring is reactive. Digital twins are predictive. By simulating system behavior before failures occur, companies reduce downtime by up to 45% and cut maintenance costs by a third.",
    metric: "45%",
    metricLabel: "Reduction in downtime",
    color: "accent",
    tag: "IMPACT",
  },
  {
    icon: BarChart3,
    title: "How Korvixes Simulates",
    description:
      "Korvixes ingests live system telemetry, builds physics-accurate behavioral models, and runs continuous simulations in parallel with real operations. Alerts fire before anomalies become incidents.",
    metric: "2.4ms",
    metricLabel: "Simulation cycle time",
    color: "primary",
    tag: "ENGINE",
  },
]

export function ProductOverview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="product" className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-circuit opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(42,107,219,0.05), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-accent/30 bg-accent/5 cyber-chamfer-sm"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-blink" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">Platform Overview</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            THE INTELLIGENCE LAYER FOR{" "}
            <span className="gradient-text text-glow-blue">INDUSTRIAL SYSTEMS</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed tracking-wide"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Korvixes bridges the gap between physical machinery and digital insight —
            turning raw sensor data into actionable operational intelligence.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-0 border border-border/40">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative p-8 cursor-default overflow-hidden transition-all duration-300 hover:bg-primary/5
                ${i < 2 ? 'border-r border-border/40' : ''}`}
            >
              {/* Hover beam */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent animate-beam" />
              </div>

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                pillar.color === 'primary'
                  ? 'bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0'
                  : 'bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${
                  pillar.color === 'primary' ? 'text-primary' : 'text-accent'
                }`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {`// ${pillar.tag}`}
                </span>
              </div>

              {/* Icon */}
              <div className={`relative w-12 h-12 cyber-chamfer-sm flex items-center justify-center mb-6 transition-all duration-300 ${
                pillar.color === "primary"
                  ? "bg-primary/10 border border-primary/25 group-hover:bg-primary/20 group-hover:glow-blue-sm"
                  : "bg-accent/10 border border-accent/25 group-hover:bg-accent/20 group-hover:glow-cyan-sm"
              }`}>
                <pillar.icon className={`w-5 h-5 ${pillar.color === "primary" ? "text-primary" : "text-accent"}`} strokeWidth={1.5} />
              </div>

              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-8 tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {pillar.description}
              </p>

              {/* Metric */}
              <div className={`pt-6 border-t ${
                pillar.color === "primary" ? "border-primary/20" : "border-accent/20"
              }`}>
                <div className={`text-4xl font-black ${
                  pillar.color === "primary" ? "gradient-text text-glow-blue" : "text-accent text-glow-cyan"
                }`} style={{ fontFamily: 'Orbitron, monospace' }}>
                  {pillar.metric}
                </div>
                <div className="text-[10px] text-muted-foreground mt-1 tracking-widest uppercase"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {pillar.metricLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
