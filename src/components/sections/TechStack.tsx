import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Layers, Zap, BarChart2, Activity, Code2, Shield, Cpu, Globe } from "lucide-react"

const techItems = [
  { icon: Code2, name: "React + Vite", role: "UI Runtime", description: "Ultra-fast frontend with HMR and optimized production bundles", color: "primary" },
  { icon: Zap, name: "Framer Motion", role: "Animation Engine", description: "60fps transitions and physics-accurate micro-interactions", color: "accent" },
  { icon: Layers, name: "Tailwind CSS", role: "Design System", description: "Utility-first styling with design tokens and dark mode", color: "primary" },
  { icon: BarChart2, name: "Recharts", role: "Visualization", description: "Real-time chart rendering with streaming data support", color: "accent" },
  { icon: Activity, name: "Simulation Engine", role: "Core Logic", description: "Frontend physics models with deterministic state machines", color: "primary" },
  { icon: Shield, name: "TypeScript", role: "Type Safety", description: "Full type coverage across the simulation codebase", color: "accent" },
]

const capabilities = [
  { label: "Concurrent simulations", value: "10,000+" },
  { label: "Data points per second", value: "500K" },
  { label: "Chart refresh rate", value: "60 FPS" },
  { label: "Cold start time", value: "< 400ms" },
]

// NVIDIA-style architecture diagram data
const archLayers = [
  { label: "PRESENTATION LAYER", sublabel: "React · Framer Motion · Recharts", color: "#3BC4E8", icon: Globe },
  { label: "SIMULATION ENGINE", sublabel: "Physics Models · State Machines · Predictive Inference", color: "#2A6BDB", icon: Cpu },
  { label: "DATA INTEGRATION", sublabel: "IoT Streams · ERP · SCADA · PLC · MES", color: "#2A6BDB", icon: Activity },
  { label: "SIMULATION COMPUTE CORE", sublabel: "Digital Twin SDK · GPU Compute · Parallel Simulation", color: "#3BC4E8", icon: Zap },
]

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="technology" className="relative py-16 md:py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-circuit opacity-40" />
      <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-full max-w-[500px] aspect-square blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(42,107,219,0.05), transparent)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-primary/30 bg-primary/5 cyber-chamfer-sm">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            ENGINEERED FOR{" "}
            <span className="gradient-text">PERFORMANCE AT SCALE</span>
          </h2>
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto leading-relaxed tracking-wide"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Every component is chosen for industrial-grade reliability, rendering speed,
            and the ability to handle massive real-time data streams.
          </p>
        </motion.div>

        {/* NVIDIA Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 md:mb-10 hud-panel p-4 md:p-6 overflow-hidden"
        >
          <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-foreground mb-6 text-center"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            // Korvixes Architecture — Powered by Advanced Compute Infrastructure
          </div>
          <div className="flex flex-col gap-2">
            {archLayers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, scaleX: 0.85 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="flex items-center gap-3 md:gap-4 px-3 md:px-5 py-3 border transition-all duration-300"
                  style={{ borderColor: `${layer.color}22`, backgroundColor: `${layer.color}08` }}
                >
                  <div className="w-7 h-7 cyber-chamfer-sm flex items-center justify-center border shrink-0"
                    style={{ borderColor: `${layer.color}40`, backgroundColor: `${layer.color}15` }}>
                    <layer.icon className="w-3.5 h-3.5" strokeWidth={1.5} style={{ color: layer.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace', color: layer.color }}>
                      {layer.label}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {layer.sublabel}
                    </div>
                  </div>
                  {/* Connection indicator */}
                  <div className="shrink-0 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse-glow shrink-0" style={{ backgroundColor: layer.color }} />
                    <span className="text-[9px] tracking-widest uppercase hidden sm:inline" style={{ fontFamily: 'JetBrains Mono, monospace', color: layer.color }}>ACTIVE</span>
                  </div>
                </div>
                {/* Connector line between layers */}
                {i < archLayers.length - 1 && (
                  <div className="absolute left-[36px] bottom-0 w-px h-2 bg-border/50" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-border/40 mb-6 md:mb-10">
          {techItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group p-5 cursor-default transition-all duration-300 hover:bg-primary/5 overflow-hidden relative border-b border-border/40
                ${i >= 5 ? 'sm:border-b-0' : ''}
                ${i >= 3 ? 'lg:border-b-0' : ''}
                ${i % 2 === 0 ? 'sm:border-r sm:border-border/40' : ''}
                ${i % 3 !== 2 ? 'lg:border-r lg:border-border/40' : ''}
              `}
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/0 group-hover:border-primary/70 transition-all duration-300" />
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 cyber-chamfer-sm flex items-center justify-center border transition-all duration-300 ${
                  item.color === "primary"
                    ? "bg-primary/8 border-primary/20 group-hover:bg-primary/20 group-hover:glow-blue-sm"
                    : "bg-accent/8 border-accent/20 group-hover:bg-accent/20 group-hover:glow-cyan-sm"
                }`}>
                  <item.icon className={`w-4 h-4 ${item.color === "primary" ? "text-primary" : "text-accent"}`} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-bold text-xs uppercase tracking-wide" style={{ fontFamily: 'Orbitron, monospace' }}>{item.name}</div>
                  <div className={`text-[10px] font-medium ${item.color === "primary" ? "text-primary/70" : "text-accent/70"}`}
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.role}</div>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Performance metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hud-panel p-0 overflow-hidden"
        >
          <div className="px-6 pt-5 pb-3">
            <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-foreground text-center"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              // Platform Capabilities
            </div>
          </div>
          <div className="border-t border-primary/15">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className={`group relative text-center px-4 py-6 transition-all duration-300 hover:bg-primary/5 ${
                    i < 2 ? 'border-b border-primary/10 md:border-b-0' : ''
                  } ${i % 2 === 0 ? 'border-r border-primary/10 md:border-r-0' : ''} ${
                    i < 3 ? 'md:border-r md:border-primary/10' : ''
                  }`}
                >
                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-black gradient-text mb-1.5" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {cap.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground tracking-wide group-hover:text-foreground/80 transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {cap.label}
                    </div>
                    {/* Bottom accent on hover */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/60 transition-all duration-300 group-hover:w-8" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
