import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { Globe, Code, Shield, BarChart, Users, ArrowRight } from "lucide-react"

const openRoles = [
  { dept: "Engineering", icon: Code, roles: [
    { title: "Senior Simulation Engine Engineer", location: "London / Remote", type: "Full-time", level: "Senior" },
    { title: "Staff Platform Engineer — Real-time Systems", location: "Singapore / Remote", type: "Full-time", level: "Staff" },
    { title: "ML Research Engineer — Digital Twin AI", location: "London / Berlin", type: "Full-time", level: "Senior" },
    { title: "DevOps / Platform SRE", location: "Remote (EU/US)", type: "Full-time", level: "Mid–Senior" },
  ]},
  { dept: "Product & Design", icon: BarChart, roles: [
    { title: "Senior Product Manager — Industrial IoT", location: "London", type: "Full-time", level: "Senior" },
    { title: "Product Designer — HMI & Control Interfaces", location: "Remote", type: "Full-time", level: "Mid–Senior" },
  ]},
  { dept: "Security", icon: Shield, roles: [
    { title: "Senior Application Security Engineer", location: "London / Remote", type: "Full-time", level: "Senior" },
    { title: "OT/ICS Security Specialist", location: "Hybrid — London", type: "Full-time", level: "Senior" },
  ]},
  { dept: "Go-to-Market", icon: Globe, roles: [
    { title: "Enterprise Account Executive — DACH", location: "Frankfurt / Remote", type: "Full-time", level: "Senior" },
    { title: "Solutions Engineer — Manufacturing", location: "Detroit / Remote", type: "Full-time", level: "Mid–Senior" },
  ]},
]

const benefits = [
  { title: "Equity", text: "Meaningful equity participation from day one. We want you to own what you build." },
  { title: "Remote-first", text: "Work from anywhere with hubs in London, Singapore, and Frankfurt for those who want them." },
  { title: "Learning Budget", text: "$3,000 annual budget for conferences, courses, certifications, and books." },
  { title: "Hardware", text: "Latest MacBook Pro or equivalent workstation plus any peripherals you need." },
  { title: "Health", text: "Comprehensive private health insurance for you and immediate family." },
  { title: "Sabbatical", text: "6-week paid sabbatical after 4 years. Build something personal, travel, rest." },
]

export function CareersPage() {
  return (
    <PageLayout
      title="Careers"
      subtitle="Join the team building the intelligence layer for industrial simulation."
      badge="We're Hiring"
    >
      {/* Intro */}
      <div className="hud-panel p-8 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit opacity-20 pointer-events-none" />
        <div className="relative max-w-3xl">
          <p className="text-sm text-muted-foreground leading-relaxed mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <span className="text-accent/60 mr-1">&gt;</span>
            Korvixes is a team of ~180 engineers, scientists, and operators obsessed with making industrial systems reliable, predictable, and intelligent. We work on problems that matter — from preventing plant shutdowns at automotive factories to optimizing energy distribution for national grids.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 border border-[#00e676]/20 bg-[#00e676]/5">
              <span className="w-1.5 h-1.5 rounded-full status-dot-green animate-blink" />
              <span className="text-[10px] text-[#00e676]/80 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {openRoles.reduce((acc, dept) => acc + dept.roles.length, 0)} open positions
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground/50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              across {openRoles.length} departments
            </span>
          </div>
        </div>
      </div>

      {/* Open Roles */}
      <div className="mb-20">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Open Positions</h2>
        <div className="space-y-8">
          {openRoles.map((dept, dIdx) => (
            <motion.div
              key={dept.dept}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: dIdx * 0.06 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <dept.icon className="w-3 h-3 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-foreground/70 tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>{dept.dept}</span>
              </div>
              <div className="space-y-2">
                {dept.roles.map((role) => (
                  <a
                    key={role.title}
                    href={`mailto:careers@korvixes.io?subject=Application for ${encodeURIComponent(role.title)}`}
                    className="hud-panel p-5 flex items-center gap-4 hover:border-primary/40 transition-all group"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground/90 mb-1.5 group-hover:text-primary transition-colors" style={{ fontFamily: 'Orbitron, monospace' }}>
                        {role.title}
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-[10px] text-muted-foreground tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          <span className="text-primary/40 mr-1">📍</span>{role.location}
                        </span>
                        <span className="text-muted-foreground/30">·</span>
                        <span className="text-[10px] text-muted-foreground tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{role.type}</span>
                        <span className="text-muted-foreground/30">·</span>
                        <span className="text-[10px] text-accent/70 tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{role.level}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Benefits & Perks</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="hud-panel p-5"
            >
              <div className="text-xs font-bold text-primary tracking-wide uppercase mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>{benefit.title}</div>
              <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 border border-primary/20 bg-primary/5 cyber-chamfer text-center">
        <Users className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1} />
        <h3 className="text-lg font-black gradient-text mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>Don't See Your Role?</h3>
        <p className="text-xs text-muted-foreground mb-6 max-w-md mx-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          We hire exceptional people regardless of whether we have an open role. If you're an expert in industrial simulation, real-time systems, or OT security, we want to hear from you.
        </p>
        <a
          href="mailto:careers@korvixes.io"
          className="inline-flex items-center gap-2 px-6 py-3 cyber-chamfer bg-primary/15 border border-primary/50 hover:border-primary hover:bg-primary/25 text-primary text-xs font-semibold tracking-widest uppercase transition-all"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Send General Application
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </PageLayout>
  )
}
