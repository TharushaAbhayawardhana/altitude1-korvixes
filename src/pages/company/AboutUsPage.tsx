import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { Hexagon, Cpu, Globe, Zap, Users, Target } from "lucide-react"

const timeline = [
  { year: "2019", event: "Founded", detail: "Korvixes founded by a team of industrial engineers and simulation scientists from Siemens, leading technology institutions, and MIT CSAIL." },
  { year: "2020", event: "Seed Round", detail: "$8M seed led by Threshold Ventures. First enterprise pilot with a Tier 1 automotive manufacturer." },
  { year: "2021", event: "Series A", detail: "$34M Series A. Platform reaches 50+ enterprise customers. Opened Singapore and Frankfurt engineering hubs." },
  { year: "2022", event: "Engine v2", detail: "Korvixes Simulation Engine v2 achieves sub-2ms latency. First deployment in live nuclear facility monitoring." },
  { year: "2023", event: "Series B", detail: "$120M Series B led by Accel & Tiger Global. ISO 27001 and IEC 62443 certification awarded." },
  { year: "2024", event: "Simulation Intelligence Layer", detail: "Simulation Intelligence layer launched. 180+ enterprise clients across 40+ countries." },
  { year: "2025", event: "v4 Platform", detail: "Platform v4 with Digital Twin Composer and SOC 2 Type II certification. 10,240-node global network." },
]

const values = [
  { icon: Target, title: "Precision First", text: "Every simulation output must be defensible. We hold ourselves to 99.8% accuracy across all workloads — not as a marketing claim but as an engineering constraint." },
  { icon: Globe, title: "Industrial Scale", text: "We build for the world's most demanding environments: automotive plants, energy grids, semiconductor fabs. Korvixes earns its place in critical infrastructure." },
  { icon: Zap, title: "Relentless Performance", text: "Sub-millisecond latency isn't a feature — it's a prerequisite. Our engineering culture prizes speed and reliability above all else." },
  { icon: Users, title: "Customer Partnership", text: "We don't sell software. We embed with your engineering teams, understand your processes, and build long-term operational capability." },
]

const leadership = [
  { name: "Dr. Elena Marsh", role: "CEO & Co-Founder", background: "Former Principal Engineer, Siemens Digital Industries. PhD in Control Systems, MIT." },
  { name: "James Okafor", role: "CTO & Co-Founder", background: "Former Research Scientist, NVIDIA Omniverse. MS in Computational Physics, Stanford." },
  { name: "Priya Nair", role: "Chief Product Officer", background: "Former VP Product, PTC Inc. 15 years in industrial software product strategy." },
  { name: "Marcus Wei", role: "Chief Security Officer", background: "Former NSA Technical Director. Led critical infrastructure cybersecurity programs for 12 years." },
  { name: "Sarah Donovan", role: "VP Engineering", background: "Former Engineering Director, Rockwell Automation. Expert in real-time systems and OT/IT convergence." },
  { name: "Ahmed Al-Rashidi", role: "VP Sales & Partnerships", background: "Former Head of Enterprise Sales, ANSYS. Built partner ecosystem across 30+ countries." },
]

export function AboutUsPage() {
  return (
    <PageLayout
      title="About"
      subtitle="We're building the intelligence layer for the world's industrial infrastructure."
      badge="Company"
    >
      {/* Mission */}
      <div className="mb-20">
        <div className="hud-panel p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-circuit opacity-30 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <Hexagon className="w-4 h-4 text-primary" strokeWidth={1} />
              <span className="text-[10px] text-primary tracking-[0.3em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Mission Statement</span>
            </div>
            <p className="text-xl md:text-2xl font-bold text-foreground/90 leading-relaxed max-w-3xl" style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.02em' }}>
              To make industrial systems{" "}
              <span className="gradient-text">predictable, optimizable, and resilient</span>{" "}
              through real-time digital simulation — before failures happen, not after.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          { value: "180+", label: "Enterprise Clients", icon: Users },
          { value: "40+", label: "Countries", icon: Globe },
          { value: "10,240", label: "Network Nodes", icon: Cpu },
          { value: "2019", label: "Founded", icon: Hexagon },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="hud-panel p-5 text-center hover:border-primary/30 transition-colors"
          >
            <stat.icon className="w-4 h-4 text-primary mx-auto mb-3" strokeWidth={1} />
            <div className="text-2xl font-black gradient-text" style={{ fontFamily: 'Orbitron, monospace' }}>{stat.value}</div>
            <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mb-20">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Company Timeline</h2>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-6"
              >
                <div className="w-14 shrink-0 text-right">
                  <span className="text-xs font-bold text-primary" style={{ fontFamily: 'Orbitron, monospace' }}>{item.year}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[1.15rem] top-1.5 w-2 h-2 rounded-full bg-primary border border-background" />
                </div>
                <div className="hud-panel p-4 flex-1 hover:border-primary/30 transition-colors">
                  <div className="text-xs font-bold text-foreground/90 mb-1 tracking-wide" style={{ fontFamily: 'Orbitron, monospace' }}>{item.event}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Core Values</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="hud-panel p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <value.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xs font-bold text-foreground/90 tracking-wide uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>{value.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div>
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadership.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="hud-panel p-5 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 cyber-chamfer-sm bg-primary/8 border border-primary/25 flex items-center justify-center mb-4">
                <span className="text-sm font-bold text-primary" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div className="text-sm font-bold text-foreground/90 mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>{person.name}</div>
              <div className="text-[10px] text-accent/80 tracking-widest uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{person.role}</div>
              <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{person.background}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
