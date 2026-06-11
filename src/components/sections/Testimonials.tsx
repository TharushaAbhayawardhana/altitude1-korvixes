import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"
import sarahImg from "@/assets/testimonials/sarah-veldkamp.svg"
import priyaImg from "@/assets/testimonials/priya-chandrasekhar.svg"
import erikImg from "@/assets/testimonials/erik-nakamura.svg"
import marcusImg from "@/assets/testimonials/marcus-thorne.svg"

const testimonials = [
  {
    name: "Dr. Marcus Thorne",
    company: "AeroSync Dynamics",
    industry: "Aerospace Manufacturing",
    text: "Korvixes reduced our unplanned downtime by 62% in the first quarter. The digital twin model caught a critical vibration anomaly in our turbine assembly line three days before any sensor threshold was breached.",
    imgSrc: marcusImg,
  },
  {
    name: "Sarah Veldkamp",
    company: "OmniCore Energy",
    industry: "Energy & Utilities",
    text: "We deployed Korvixes across 14 substations simultaneously. The real-time load simulation gave us the confidence to push our renewable dispatch from 40% to 73% without compromising grid stability.",
    imgSrc: sarahImg,
  },
  {
    name: "Erik Nakamura",
    company: "PrecisionFab Industries",
    industry: "Industrial Manufacturing",
    text: "Predictive modeling has fundamentally changed how we approach maintenance. We've moved from scheduled downtime to condition-based operations. Our OEE climbed from 78% to 94% within six months.",
    imgSrc: erikImg,
  },
  {
    name: "Dr. Priya Chandrasekhar",
    company: "Quantum Semiconductor Corp",
    industry: "Semiconductor Fabrication",
    text: "For fabs running at nanometer precision, every millisecond matters. Korvixes gave us sub-millisecond simulation accuracy across our entire lithography workflow. The ROI case was undeniable.",
    imgSrc: priyaImg,
  },
]

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="testimonials" className="relative py-16 md:py-28 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(59,196,232,0.04) 0%, transparent 70%)'
      }} />
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
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">// Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
            TRUSTED BY{" "}
            <span className="gradient-text text-glow-blue">INDUSTRY LEADERS</span>
          </h2>
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto leading-relaxed tracking-wide"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Enterprise engineering teams rely on Korvixes to simulate, predict, and optimize
            their most critical industrial operations.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative hud-panel p-6 md:p-7 overflow-hidden cursor-default transition-all duration-300 feature-card-hover"
            >
              {/* Hover ambient glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(42,107,219,0.06), transparent 70%)' }} />

              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                <Quote className="w-8 h-8" strokeWidth={1} />
              </div>

              <div className="relative">
                {/* Text */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed tracking-wide mb-6"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <span className="text-primary/50 text-xs mr-1">&ldquo;</span>
                  {t.text}
                  <span className="text-primary/50 text-xs ml-1">&rdquo;</span>
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-border/30">
                  <div className="w-16 h-16 cyber-chamfer-sm bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0 overflow-hidden group-hover:glow-blue-sm transition-all duration-300">
                    <img src={t.imgSrc} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground/90 tracking-wide" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {t.name}
                    </div>
                    <div className="text-[10px] text-accent/70 tracking-wider mt-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {t.company}
                    </div>
                    <div className="text-[9px] text-muted-foreground/60 tracking-widest uppercase mt-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {t.industry}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
