import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight, Play, Cpu, Zap, Globe } from "lucide-react"

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 10 + 5,
  delay: Math.random() * 5,
}))

const dataFlowLines = [
  { x1: "8%", y1: "25%", x2: "30%", y2: "50%", delay: 0 },
  { x1: "30%", y1: "50%", x2: "60%", y2: "35%", delay: 0.8 },
  { x1: "60%", y1: "35%", x2: "85%", y2: "55%", delay: 1.6 },
  { x1: "15%", y1: "72%", x2: "45%", y2: "48%", delay: 1.2 },
  { x1: "45%", y1: "48%", x2: "78%", y2: "22%", delay: 2.1 },
  { x1: "22%", y1: "40%", x2: "55%", y2: "65%", delay: 0.4 },
]

const stats = [
  { value: "99.8%", label: "Simulation Accuracy", icon: Zap },
  { value: "2.4ms", label: "Real-time Latency", icon: Cpu },
  { value: "180+", label: "Industrial Clients", icon: Globe },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid-animated" />

      {/* Radial voids */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(42,107,219,0.06) 0%, transparent 70%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 40% 30% at 20% 80%, rgba(59,196,232,0.04) 0%, transparent 60%)',
      }} />

      {/* Top/bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/60"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* SVG data flow */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A6BDB" stopOpacity="0" />
            <stop offset="50%" stopColor="#2A6BDB" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3BC4E8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3BC4E8" stopOpacity="0" />
            <stop offset="50%" stopColor="#3BC4E8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2A6BDB" stopOpacity="0" />
          </linearGradient>
        </defs>
        {dataFlowLines.map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke={i % 2 === 0 ? "url(#lg1)" : "url(#lg2)"}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.9, 0] }}
            transition={{ duration: 3.5, delay: line.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {dataFlowLines.map((line, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={line.x2} cy={line.y2} r="3"
            fill="#2A6BDB"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.8, 1], opacity: [0, 1, 0.5] }}
            transition={{ duration: 2, delay: line.delay + 0.5, repeat: Infinity, repeatDelay: 1.5 }}
          />
        ))}
      </svg>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* System status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2.5 px-4 py-1.5 cyber-chamfer-sm border border-primary/30 bg-primary/8 text-primary"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <span className="w-1.5 h-1.5 rounded-full status-dot-green animate-blink inline-block shrink-0" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase">Industrial AI Platform — Now in Production</span>
          </div>
        </motion.div>

        {/* Headline with glitch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mb-8"
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-0 animate-glitch"
            style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '-0.02em' }}
          >
            <span className="block text-foreground/90 text-glow-blue" data-text="DIGITAL TWIN">DIGITAL TWIN</span>
            <span
              className="block gradient-text cyber-glitch"
              data-text="INTELLIGENCE"
              style={{ WebkitTextFillColor: 'transparent' }}
            >
              INTELLIGENCE
            </span>
            <span className="block text-foreground/80 text-[0.7em] tracking-widest mt-2">FOR INDUSTRIAL SYSTEMS</span>
          </h1>
        </motion.div>

        {/* Typewriter subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          <span className="text-accent/60 mr-1">&gt;</span>
          Korvixes simulates industrial systems in real-time — enabling engineers to
          monitor, predict, and optimize factory performance with sub-millisecond precision.
          <span className="inline-block w-2 h-4 bg-accent ml-1 animate-blink-cursor align-middle" />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <button
            className="group relative cyber-chamfer bg-primary/15 border border-primary/60 hover:border-primary hover:bg-primary/25 hover:glow-blue text-primary text-sm font-semibold tracking-widest uppercase px-8 py-4 transition-all duration-200 flex items-center gap-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <span>Explore Platform</span>
            <ChevronRight className="w-4 h-4" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent animate-beam" />
            </div>
          </button>
          <button
            className="cyber-chamfer border border-border/50 hover:border-accent/50 bg-transparent hover:bg-accent/5 text-muted-foreground hover:text-accent text-sm font-semibold tracking-widest uppercase px-8 py-4 transition-all duration-200 flex items-center gap-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <Play className="w-4 h-4" />
            <span>View Solutions</span>
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-0 divide-x divide-border/40"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-8 py-2">
              <stat.icon className="w-3.5 h-3.5 text-accent mb-1" strokeWidth={1.5} />
              <span className="text-xl md:text-2xl font-black gradient-text" style={{ fontFamily: 'Orbitron, monospace' }}>
                {stat.value}
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[9px] text-muted-foreground tracking-[0.3em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary/70 to-transparent"
        />
      </motion.div>
    </section>
  )
}
