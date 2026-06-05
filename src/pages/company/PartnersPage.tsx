import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { Handshake, Code, Globe, Award, ArrowRight } from "lucide-react"

const partnerTiers = [
  {
    tier: "Strategic",
    color: "text-[#f59e0b]",
    borderColor: "border-[#f59e0b]/25",
    bgColor: "bg-[#f59e0b]/5",
    partners: [
      { name: "Siemens Digital Industries", desc: "Co-developed integration layer for SIMATIC and TIA Portal. Joint go-to-market in European automotive and energy sectors." },
      { name: "NVIDIA Omniverse", desc: "Physics-based simulation rendering and RTX-accelerated visualization pipeline. USD format interoperability." },
      { name: "Microsoft Azure", desc: "Preferred cloud infrastructure partner. Co-sell agreement and joint enterprise customer success program." },
      { name: "ABB Robotics", desc: "Native digital twin integration with ABB IRC5 and OmniCore controller families for robotic cell simulation." },
    ]
  },
  {
    tier: "Technology",
    color: "text-primary",
    borderColor: "border-primary/25",
    bgColor: "bg-primary/5",
    partners: [
      { name: "PTC ThingWorx", desc: "Bidirectional IIoT data bridge enabling Korvixes digital twins to consume and publish to ThingWorx streams." },
      { name: "OSIsoft PI System", desc: "Native PI Server historian integration for real-time plant data ingestion into simulation models." },
      { name: "Rockwell Automation", desc: "FactoryTalk integration for Studio 5000 PLC program digital twin synchronization." },
      { name: "Honeywell Forge", desc: "Process industry vertical partnership covering refining, petrochemical, and utilities sectors." },
      { name: "ANSYS", desc: "High-fidelity FEA/CFD model import pipeline enabling physics-accurate structural and thermal simulation." },
      { name: "Snowflake", desc: "Enterprise data warehouse integration for historical simulation data analytics and long-term storage." },
    ]
  },
  {
    tier: "Systems Integrator",
    color: "text-accent",
    borderColor: "border-accent/25",
    bgColor: "bg-accent/5",
    partners: [
      { name: "Accenture Industry X", desc: "Global deployment and change management partner for large-scale industrial digital transformation programs." },
      { name: "Deloitte Operations", desc: "Strategy and implementation partner for digital twin programs in energy and infrastructure." },
      { name: "Cognizant IoT & Engineering", desc: "Regional deployment partner across North America and APAC markets." },
      { name: "TCS Manufacturing", desc: "Implementation partner for discrete and process manufacturing verticals in India and Europe." },
    ]
  }
]

export function PartnersPage() {
  return (
    <PageLayout
      title="Partners"
      subtitle="The ecosystem of technology and service partners that extend the reach and capability of the Korvixes platform."
      badge="Partner Ecosystem"
    >
      {/* Partner program CTA */}
      <div className="hud-panel p-8 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <Handshake className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="text-[10px] text-primary tracking-[0.3em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Partner Program</span>
            </div>
            <h2 className="text-lg font-black text-foreground/90 mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
              Become a Korvixes Partner
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              We work with technology vendors, systems integrators, and domain experts to bring digital twin capability to new verticals and geographies. Partners get access to early API features, co-marketing support, and joint revenue programs.
            </p>
          </div>
          <a
            href="mailto:partners@korvixes.io"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 cyber-chamfer bg-primary/15 border border-primary/50 hover:border-primary hover:bg-primary/25 text-primary text-xs font-semibold tracking-widest uppercase transition-all"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Apply to Partner
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Partner tiers */}
      {partnerTiers.map((tier, tIdx) => (
        <motion.div
          key={tier.tier}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: tIdx * 0.08 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className={`px-3 py-1 border ${tier.borderColor} ${tier.bgColor}`}>
              <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${tier.color}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {tier.tier}
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-border/40 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {tier.partners.map((partner, pIdx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: pIdx * 0.06 }}
                className="hud-panel p-5 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-bold text-foreground/90 group-hover:text-primary transition-colors" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {partner.name}
                  </h3>
                  <div className={`w-2 h-2 rounded-full shrink-0 mt-1 ${tier.color.replace('text-', 'bg-')}`} style={{ opacity: 0.6 }} />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {partner.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {[
          { value: "40+", label: "Technology Partners", icon: Code },
          { value: "25+", label: "SI Partners", icon: Globe },
          { value: "60+", label: "Countries Reached", icon: Award },
        ].map((stat) => (
          <div key={stat.label} className="hud-panel p-5 text-center">
            <stat.icon className="w-4 h-4 text-primary mx-auto mb-3" strokeWidth={1} />
            <div className="text-2xl font-black gradient-text" style={{ fontFamily: 'Orbitron, monospace' }}>{stat.value}</div>
            <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
