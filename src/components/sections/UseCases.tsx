import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Factory, Zap, Cpu, BarChart3 } from "lucide-react"

const useCases = [
  {
    icon: Factory,
    industry: "Manufacturing Plants",
    title: "Optimize Production Lines",
    description:
      "Mirror entire assembly lines in real-time. Detect throughput bottlenecks, simulate layout changes before physical implementation, and prevent unplanned stoppages.",
    bullets: ["OEE monitoring", "Bottleneck detection", "Shift performance analytics"],
    metric: "40% fewer stoppages",
  },
  {
    icon: Zap,
    industry: "Energy Systems",
    title: "Smart Grid & Power Management",
    description:
      "Model power generation and distribution networks. Predict load fluctuations, simulate grid failures, and optimize renewable energy dispatch across substations.",
    bullets: ["Grid load balancing", "Renewable dispatch optimization", "Fault isolation"],
    metric: "28% energy savings",
  },
  {
    icon: Cpu,
    industry: "Smart Factories",
    title: "Industry 4.0 Operations",
    description:
      "Connect every robotic arm, conveyor, and sensor into a single digital model. Enable autonomous decision-making and continuous process improvement.",
    bullets: ["Robot coordination", "Real-time quality control", "Predictive maintenance"],
    metric: "3x faster insights",
  },
  {
    icon: BarChart3,
    industry: "Industrial Monitoring",
    title: "Unified Operations Intelligence",
    description:
      "Aggregate data from disparate systems — SCADA, PLC, MES — into a single pane of glass. Cross-plant benchmarking and KPI tracking for operations leaders.",
    bullets: ["Multi-plant dashboards", "SCADA integration", "Executive KPI reporting"],
    metric: "360° visibility",
  },
]

export function UseCases() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="use-cases" className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,196,232,0.04), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-accent/30 bg-accent/5 cyber-chamfer-sm">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Use Cases</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            BUILT FOR EVERY{" "}
            <span className="text-accent text-glow-cyan">INDUSTRIAL SECTOR</span>
          </h2>
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto leading-relaxed tracking-wide"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            From single-machine monitoring to multi-plant enterprise intelligence —
            Korvixes adapts to the complexity of your operations.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-0 border border-border/40">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-8 cursor-default overflow-hidden transition-all duration-300 hover:bg-accent/3
                ${i % 2 === 0 ? 'border-r border-border/40' : ''}
                ${i < 2 ? 'border-b border-border/40' : ''}
              `}
            >
              {/* Hover beam */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-beam" />
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-accent/0 group-hover:border-accent/70 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary/0 group-hover:border-primary/50 transition-all duration-300" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-accent/60 group-hover:text-accent/90 mb-1.5 block transition-colors"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {`// ${uc.industry}`}
                    </span>
                    <h3 className="text-sm font-black uppercase tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>{uc.title}</h3>
                  </div>
                  <div className="w-10 h-10 cyber-chamfer-sm bg-accent/8 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/18 group-hover:glow-cyan-sm transition-all">
                    <uc.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-6 tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {uc.description}
                </p>

                <div className="flex flex-col gap-1.5 mb-6">
                  {uc.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-xs text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      <span className="text-accent/70 text-[10px]">▸</span>
                      {b}
                    </div>
                  ))}
                </div>

                <div className="pt-5 border-t border-accent/15">
                  <span className="text-lg font-black text-accent text-glow-cyan" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {uc.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
