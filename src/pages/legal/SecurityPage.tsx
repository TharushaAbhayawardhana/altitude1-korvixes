import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { Shield, Lock, AlertOctagon, Eye, Server, Bug } from "lucide-react"

const certifications = [
  { name: "ISO 27001", status: "CERTIFIED", year: "2024" },
  { name: "SOC 2 Type II", status: "CERTIFIED", year: "2024" },
  { name: "NIST CSF", status: "COMPLIANT", year: "2025" },
  { name: "IEC 62443", status: "CERTIFIED", year: "2024" },
  { name: "GDPR", status: "COMPLIANT", year: "2025" },
  { name: "FedRAMP Moderate", status: "IN PROGRESS", year: "2026" },
]

const securityPillars = [
  {
    icon: Lock,
    title: "Encryption Architecture",
    items: [
      "TLS 1.3 mandatory for all transport; TLS 1.2 deprecated across all endpoints",
      "AES-256-GCM for data at rest with HSM-managed key lifecycle",
      "Zero-knowledge encryption available for Sovereign tier customers",
      "Cryptographic key rotation every 90 days or upon security event",
      "End-to-end encryption for simulation data streams using ECDH key exchange"
    ]
  },
  {
    icon: Eye,
    title: "Access Control & Identity",
    items: [
      "Zero-trust network architecture with micro-segmentation across all services",
      "SAML 2.0 and OIDC enterprise SSO integration",
      "Hardware FIDO2/WebAuthn MFA enforced for all privileged access",
      "Just-in-time (JIT) provisioning with automatic deprovisioning on inactivity",
      "Privileged Access Management (PAM) with session recording for admin access"
    ]
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    items: [
      "Air-gapped build pipelines with signed artifact verification at each stage",
      "Immutable infrastructure with automated security patching within 24h of CVE disclosure",
      "Network traffic analyzed by intelligence based anomaly detection at 10Gbps+ line rate",
      "DDoS protection with 3Tbps+ scrubbing capacity across all edge nodes",
      "Kubernetes workload isolation with seccomp profiles and runtime threat detection"
    ]
  },
  {
    icon: AlertOctagon,
    title: "Incident Response",
    items: [
      "24/7/365 Security Operations Center (SOC) with sub-15-minute alert triage SLA",
      "Automated containment playbooks triggered on high-confidence threat signals",
      "Customer notification within 72 hours of confirmed data breach (GDPR compliant)",
      "Detailed incident post-mortems published within 14 days for severity 1 events",
      "Dedicated incident response retainer with enterprise customers via DPA"
    ]
  }
]

export function SecurityPage() {
  return (
    <PageLayout
      title="Security"
      subtitle="Enterprise-grade security architecture protecting your industrial simulation data and operations."
      badge="Security Policy"
    >
      {/* Certifications */}
      <div className="mb-16">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          // Certifications & Compliance Status
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="hud-panel p-4 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-xs font-bold text-foreground/80 mb-1 tracking-wide" style={{ fontFamily: 'Orbitron, monospace' }}>
                {cert.name}
              </div>
              <div className={`text-[9px] tracking-widest font-bold ${cert.status === 'IN PROGRESS' ? 'text-[#f59e0b]' : 'text-[#00e676]'}`}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {cert.status}
              </div>
              <div className="text-[9px] text-muted-foreground/50 mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {cert.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Security Pillars */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {securityPillars.map((pillar, pIdx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: pIdx * 0.08 }}
            className="hud-panel p-0 overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-primary/15 bg-black/40">
              <div className="w-7 h-7 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                <pillar.icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-xs font-bold tracking-widest uppercase text-foreground/90" style={{ fontFamily: 'Orbitron, monospace' }}>
                {pillar.title}
              </h2>
            </div>
            <ul className="divide-y divide-border/20">
              {pillar.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-3 px-5 py-3.5 hover:bg-primary/3 transition-colors">
                  <span className="text-primary/50 text-xs mt-0.5 shrink-0">▸</span>
                  <span className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Vulnerability Disclosure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hud-panel p-0 overflow-hidden mb-12"
      >
        <div className="flex items-center gap-3 px-6 py-4 border-b border-primary/15 bg-black/40">
          <div className="w-7 h-7 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Bug className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="text-sm font-bold tracking-widest uppercase text-foreground/90" style={{ fontFamily: 'Orbitron, monospace' }}>
            Vulnerability Disclosure Program
          </h2>
        </div>
        <div className="px-6 py-6">
          <p className="text-xs text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Korvixes operates a responsible disclosure program. Security researchers who discover vulnerabilities in our platform are encouraged to report them privately before public disclosure. We commit to acknowledging reports within 48 hours, providing status updates, and issuing CVEs where applicable.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Report security vulnerabilities to: <span className="text-accent">security@korvixes.io</span>{" "}
            (PGP key available at <span className="text-accent">korvixes.io/.well-known/security.txt</span>). Our bug bounty program is managed through HackerOne with rewards up to $50,000 for critical findings.
          </p>
        </div>
      </motion.div>

      <div className="p-6 border border-[#00e676]/20 bg-[#00e676]/5 cyber-chamfer">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-4 h-4 text-[#00e676]" strokeWidth={1.5} />
          <h3 className="text-xs font-bold text-[#00e676] tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>
            Current Security Status
          </h3>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full status-dot-green animate-blink" />
            <span className="text-[9px] text-[#00e676] tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>ALL SYSTEMS NOMINAL</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          No active security incidents. Last security audit completed by NCC Group on March 14, 2026. Next scheduled audit: September 2026.
        </p>
      </div>
    </PageLayout>
  )
}
