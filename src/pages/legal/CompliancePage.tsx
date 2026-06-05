import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { Award, CheckCircle, Globe, FileCheck, Shield, Cpu } from "lucide-react"

const frameworks = [
  {
    category: "Industrial & OT Security",
    icon: Cpu,
    standards: [
      { name: "IEC 62443", description: "Industrial Automation & Control Systems security framework. Korvixes is certified at Security Level 2 (SL2) for platform components interfacing with operational technology environments.", status: "certified" },
      { name: "NERC CIP", description: "North American Electric Reliability Corporation Critical Infrastructure Protection standards for energy sector customers. Full compliance documentation available via DPA.", status: "compliant" },
      { name: "ISA/IEC 62443-4-2", description: "Component-level security requirements for embedded devices and software applications in industrial control systems.", status: "certified" },
    ]
  },
  {
    category: "Data Protection & Privacy",
    icon: Shield,
    standards: [
      { name: "GDPR", description: "Full compliance with EU General Data Protection Regulation. Data Processing Agreements available for all customers. DPO contact and data residency controls built into the platform.", status: "compliant" },
      { name: "CCPA / CPRA", description: "California Consumer Privacy Act and California Privacy Rights Act compliance. Automated data subject request handling through the Platform Console.", status: "compliant" },
      { name: "PDPA", description: "Thailand Personal Data Protection Act compliance for APAC customers. Regional data residency pinning available in the Singapore node.", status: "compliant" },
    ]
  },
  {
    category: "Information Security",
    icon: Award,
    standards: [
      { name: "ISO 27001:2022", description: "Information Security Management System certification. Covers the Korvixes platform infrastructure, development processes, and operational procedures. Annual recertification by BSI Group.", status: "certified" },
      { name: "SOC 2 Type II", description: "Service Organization Control 2 audit covering Security, Availability, and Confidentiality trust service criteria. Annual audit conducted by Deloitte. Report available under NDA.", status: "certified" },
      { name: "NIST CSF 2.0", description: "Alignment with the NIST Cybersecurity Framework across all five functions: Identify, Protect, Detect, Respond, and Recover.", status: "compliant" },
    ]
  },
  {
    category: "Government & Defense",
    icon: Globe,
    standards: [
      { name: "FedRAMP Moderate", description: "Federal Risk and Authorization Management Program authorization in progress. Expected authorization: Q4 2026. Korvixes GovCloud is currently available for pilot customers.", status: "in-progress" },
      { name: "ITAR / EAR", description: "Export Administration Regulations compliance for customers in defense-adjacent industrial sectors. US-only data processing available on request.", status: "compliant" },
    ]
  }
]

const statusConfig = {
  certified: { label: "CERTIFIED", color: "text-[#00e676]", bg: "bg-[#00e676]/10", border: "border-[#00e676]/20" },
  compliant: { label: "COMPLIANT", color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
  "in-progress": { label: "IN PROGRESS", color: "text-[#f59e0b]", bg: "bg-[#f59e0b]/10", border: "border-[#f59e0b]/20" }
}

export function CompliancePage() {
  return (
    <PageLayout
      title="Compliance"
      subtitle="Korvixes maintains rigorous compliance with global industrial, security, and data protection standards."
      badge="Compliance Framework"
    >
      {/* Compliance summary */}
      <div className="grid grid-cols-3 gap-4 mb-16">
        {[
          { value: "12+", label: "Certifications", icon: Award },
          { value: "40+", label: "Countries Covered", icon: Globe },
          { value: "Annual", label: "Audit Cycle", icon: FileCheck },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="hud-panel p-5 text-center"
          >
            <stat.icon className="w-5 h-5 text-primary mx-auto mb-3" strokeWidth={1} />
            <div className="text-2xl font-black gradient-text mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>{stat.value}</div>
            <div className="text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Framework sections */}
      <div className="space-y-10">
        {frameworks.map((framework, fIdx) => (
          <motion.div
            key={framework.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: fIdx * 0.06 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                <framework.icon className="w-3 h-3 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                // {framework.category}
              </h2>
            </div>

            <div className="space-y-3">
              {framework.standards.map((standard) => {
                const cfg = statusConfig[standard.status as keyof typeof statusConfig]
                return (
                  <div
                    key={standard.name}
                    className="hud-panel p-5 flex items-start gap-5 hover:border-primary/25 transition-colors"
                  >
                    <div className="shrink-0">
                      <div className="text-sm font-black text-foreground/90 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                        {standard.name}
                      </div>
                      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 border ${cfg.bg} ${cfg.border}`}>
                        <CheckCircle className={`w-2.5 h-2.5 ${cfg.color}`} strokeWidth={2} />
                        <span className={`text-[9px] font-bold tracking-widest ${cfg.color}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          {cfg.label}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {standard.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-6 border border-primary/20 bg-primary/5 cyber-chamfer">
        <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
          Request Compliance Documentation
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Compliance reports, audit certificates, and Data Processing Agreements are available to enterprise customers upon request. Contact your account manager or email{" "}
          <span className="text-accent">compliance@korvixes.io</span> with your organization details and the specific documentation required.
        </p>
      </div>
    </PageLayout>
  )
}
