import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Cpu, Activity, BrainCircuit, LineChart,
  Bell, Layers, Shield, Workflow,
} from "lucide-react"

const features = [
  { icon: Cpu, title: "Real-time Simulation Engine", description: "Physics-accurate models run in parallel with live operations. Predict system behavior at sub-millisecond resolution.", tag: "CORE ENGINE" },
  { icon: Activity, title: "Industrial System Monitoring", description: "Continuous telemetry from thousands of sensors. Visualize temperature, pressure, flow, and vibration in one unified view.", tag: "MONITORING" },
  { icon: BrainCircuit, title: "Predictive Behavior Modeling", description: "Machine learning models trained on historical failure patterns detect anomalies days before they become critical.", tag: "AI/ML" },
  { icon: LineChart, title: "Machine Performance Visualization", description: "Rich dashboards for every machine in your facility. OEE, availability, performance, and quality scores at a glance.", tag: "ANALYTICS" },
  { icon: Bell, title: "Smart Alerts Simulation", description: "Configurable thresholds with intelligent suppression. Route alerts to the right engineer via email, SMS, or webhook.", tag: "ALERTING" },
  { icon: Layers, title: "Multi-layer System Modeling", description: "Model entire production chains — from individual sensors up to plant-wide energy flows. Full hierarchy support.", tag: "MODELING" },
  { icon: Shield, title: "Fault Isolation & Root Cause", description: "When anomalies occur, Korvixes traces the causal chain automatically. Know exactly what caused the fault and why.", tag: "DIAGNOSTICS" },
  { icon: Workflow, title: "Data-Driven Decision Insights", description: "Operational recommendations backed by simulation evidence. Shift from gut decisions to engineering-grade insights.", tag: "INTELLIGENCE" },
]

export function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="features" className="relative py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,196,232,0.04), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-primary/30 bg-primary/5 cyber-chamfer-sm"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">// Platform Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            BUILT FOR INDUSTRIAL{" "}
            <span className="gradient-text">ENGINEERING TEAMS</span>
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
              className={`group relative p-6 cursor-default overflow-hidden transition-all duration-300 hover:bg-primary/5
                ${i % 4 !== 3 ? 'border-r border-border/40' : ''}
                ${i < 4 ? 'border-b border-border/40' : ''}
              `}
            >
              {/* Hover beam */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-beam" />
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/0 group-hover:border-primary/80 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/0 group-hover:border-accent/60 transition-all duration-300" />

              {/* Tag */}
              <span className="text-[9px] font-bold tracking-[0.2em] text-primary/50 group-hover:text-primary/80 mb-4 block transition-colors duration-200"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {`// ${feature.tag}`}
              </span>

              {/* Icon */}
              <div className="w-9 h-9 cyber-chamfer-sm bg-primary/8 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:glow-blue-sm transition-all duration-300">
                <feature.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="font-bold text-xs mb-2 leading-snug uppercase tracking-wide" style={{ fontFamily: 'Orbitron, monospace' }}>
                {feature.title}
              </h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
