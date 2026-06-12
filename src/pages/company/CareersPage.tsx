import { useState } from "react"
import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { Globe, Code, Shield, BarChart, Users, ArrowRight } from "lucide-react"
import { JobDetailModal } from "@/components/ui/JobDetailModal"
import type { JobRole } from "@/components/ui/JobDetailModal"

interface RoleWithDept extends JobRole {
  department: string
  deptIcon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}

const openRoles = [
  { dept: "Engineering", icon: Code, roles: [
    {
      title: "Senior Simulation Engine Engineer",
      location: "London / Remote",
      type: "Full-time",
      level: "Senior",
      description: "Design and optimize real-time physics simulation engines powering digital twin environments for industrial infrastructure. You will own the core simulation loop that enables manufacturers to model, predict, and prevent production failures at scale.",
      responsibilities: [
        "Develop high-performance simulation kernels for real-time digital twin environments",
        "Optimize computational pipelines for physics-based modeling across distributed systems",
        "Collaborate with ML teams to integrate AI-driven predictive models into simulation workflows",
        "Profile and benchmark simulation performance across heterogeneous hardware platforms",
        "Design deterministic replay systems for simulation debugging and audit trails",
      ],
      requiredSkills: [
        "C++17/20 with strong knowledge of modern concurrency patterns and memory models",
        "Experience with physics simulation engines (Bullet, PhysX, Drake, or custom engines)",
        "Distributed systems design and low-latency optimization",
        "CUDA/OpenCL or equivalent GPU compute frameworks",
        "Strong mathematical foundation in linear algebra and numerical methods",
      ],
      preferredQualifications: [
        "Background in computational fluid dynamics or finite element analysis",
        "Experience with real-time systems and deterministic execution guarantees",
        "Published research in simulation, robotics, or related fields",
        "Familiarity with industrial protocols (OPC-UA, Modbus, MQTT)",
        "Experience with Rust or Zig for systems-level programming",
      ],
    },
    {
      title: "Staff Platform Engineer — Real-time Systems",
      location: "Singapore / Remote",
      type: "Full-time",
      level: "Staff",
      description: "Architect and build the next-generation real-time data platform that ingests, processes, and acts on telemetry from thousands of industrial assets simultaneously. This is a high-impact role shaping the foundation of our industrial intelligence layer.",
      responsibilities: [
        "Design and implement the core real-time data ingestion and processing pipeline",
        "Build fault-tolerant distributed systems capable of processing millions of events per second",
        "Define SLIs/SLOs and build observability infrastructure for production systems",
        "Mentor senior engineers through design reviews and technical guidance",
        "Drive cross-team architectural decisions for platform scalability and reliability",
      ],
      requiredSkills: [
        "10+ years of backend engineering experience with 5+ in distributed systems",
        "Deep expertise in Go, Rust, or Java with proven systems-level design",
        "Experience with stream processing frameworks (Kafka, Flink, Pulsar)",
        "Strong understanding of consensus algorithms and distributed consistency models",
        "Production experience with Kubernetes at scale",
      ],
      preferredQualifications: [
        "Experience in industrial IoT or manufacturing technology",
        "Contributions to open-source distributed systems projects",
        "Background in database internals or storage engine development",
        "Experience with WebAssembly sandboxing for multi-tenant workloads",
      ],
    },
    {
      title: "ML Research Engineer — Digital Twin AI",
      location: "London / Berlin",
      type: "Full-time",
      level: "Senior",
      description: "Push the boundaries of what's possible in industrial AI by developing novel machine learning models that learn from high-fidelity simulations and real-world telemetry to predict equipment failure, optimize processes, and recommend interventions.",
      responsibilities: [
        "Research and develop ML models for time-series forecasting and anomaly detection",
        "Build reinforcement learning systems for industrial process optimization",
        "Design and train large-scale models on simulation-generated training data",
        "Collaborate with domain experts to encode physical constraints into learning systems",
        "Publish findings and contribute to the broader ML research community",
      ],
      requiredSkills: [
        "PhD or MSc in Machine Learning, Computer Science, or related quantitative field",
        "Strong publication record in top-tier ML conferences (NeurIPS, ICML, ICLR)",
        "Deep understanding of time-series models, transformers, and graph neural networks",
        "Proficiency in PyTorch or JAX with large-scale distributed training experience",
        "Strong Python skills and experience with ML infrastructure tooling",
      ],
      preferredQualifications: [
        "Research experience in physics-informed neural networks or scientific ML",
        "Experience with Gaussian processes and Bayesian optimization",
        "Background in control theory or dynamical systems",
        "Experience deploying ML models to production real-time environments",
      ],
    },
    {
      title: "DevOps / Platform SRE",
      location: "Remote (EU/US)",
      type: "Full-time",
      level: "Mid–Senior",
      description: "Build and operate the critical infrastructure that powers our industrial simulation platform. You will ensure reliability, scalability, and security across a global multi-cloud deployment serving enterprise manufacturing customers.",
      responsibilities: [
        "Design, implement, and maintain Kubernetes clusters across multiple cloud providers",
        "Build CI/CD pipelines for rapid, safe deployment of simulation workloads",
        "Implement comprehensive monitoring, alerting, and incident response runbooks",
        "Automate infrastructure provisioning using infrastructure-as-code principles",
        "Conduct post-mortems and drive reliability improvements across the platform",
      ],
      requiredSkills: [
        "5+ years of DevOps/SRE experience with strong Linux systems knowledge",
        "Expert-level Kubernetes administration and troubleshooting",
        "Experience with Terraform, Pulumi, or Crossplane for infrastructure as code",
        "Proficiency in at least one scripting language (Python, Go, or Bash)",
        "Experience with observability stacks (Prometheus, Grafana, OpenTelemetry)",
      ],
      preferredQualifications: [
        "Experience with real-time or low-latency infrastructure requirements",
        "Familiarity with cloud networking, VPNs, and zero-trust security models",
        "Experience operating databases at scale (PostgreSQL, CockroachDB, InfluxDB)",
        "Contributions to CNCF open-source projects",
      ],
    },
  ]},
  { dept: "Product & Design", icon: BarChart, roles: [
    {
      title: "Senior Product Manager — Industrial IoT",
      location: "London",
      type: "Full-time",
      level: "Senior",
      description: "Define and drive the product vision for our Industrial IoT platform. You will work at the intersection of hardware, software, and data to build products that transform how manufacturers monitor, simulate, and optimize their operations.",
      responsibilities: [
        "Own the product roadmap for the Korvixes industrial IoT platform",
        "Conduct customer research with engineering and operations teams at manufacturing sites",
        "Define and prioritize features based on customer impact and business value",
        "Write detailed product requirements and collaborate closely with engineering",
        "Track and report on product adoption, engagement, and business outcomes",
      ],
      requiredSkills: [
        "6+ years of product management experience in B2B SaaS or industrial software",
        "Deep understanding of IoT architectures, edge computing, and industrial protocols",
        "Strong analytical skills with experience using data to drive product decisions",
        "Excellent written and verbal communication skills for executive-level engagement",
        "Experience with agile development methodologies",
      ],
      preferredQualifications: [
        "Background in mechanical, electrical, or industrial engineering",
        "Experience with digital twin or simulation products",
        "MBA or advanced technical degree",
        "Experience taking a product from zero-to-one in a startup environment",
      ],
    },
    {
      title: "Product Designer — HMI & Control Interfaces",
      location: "Remote",
      type: "Full-time",
      level: "Mid–Senior",
      description: "Design the human-machine interfaces that operators and engineers use to monitor and control complex industrial systems. Your work will directly impact how people interact with real-time industrial data and simulation environments.",
      responsibilities: [
        "Design intuitive HMI interfaces for industrial monitoring and control applications",
        "Create and maintain a comprehensive design system for industrial UI components",
        "Conduct user research with plant operators and control room engineers",
        "Produce high-fidelity prototypes and specification handoffs for engineering",
        "Iterate on designs based on usability testing and field feedback",
      ],
      requiredSkills: [
        "4+ years of product design experience with a focus on complex data interfaces",
        "Strong portfolio demonstrating information-dense dashboard and control panel design",
        "Expert proficiency in Figma, including component systems and prototyping",
        "Understanding of real-time data visualization principles and best practices",
        "Experience designing for accessibility and diverse user populations",
      ],
      preferredQualifications: [
        "Experience with SCADA, HMI, or industrial control system design",
        "Knowledge of 3D visualization tools (Three.js, WebGL, Unity)",
        "Understanding of dark mode and high-contrast interface design patterns",
        "Experience designing for both web and native applications",
      ],
    },
  ]},
  { dept: "Security", icon: Shield, roles: [
    {
      title: "Senior Application Security Engineer",
      location: "London / Remote",
      type: "Full-time",
      level: "Senior",
      description: "Embed security into every layer of our industrial simulation platform. You will work across engineering teams to ensure our products meet the highest standards of security required by critical infrastructure and enterprise manufacturing customers.",
      responsibilities: [
        "Conduct threat modeling and security architecture reviews for new features and systems",
        "Develop and maintain application security tooling (SAST, DAST, SCA in CI/CD)",
        "Lead penetration testing and vulnerability assessment programs",
        "Design and implement security controls for multi-tenant SaaS infrastructure",
        "Drive security awareness and training across engineering organization",
      ],
      requiredSkills: [
        "5+ years of application security engineering experience",
        "Deep understanding of web application vulnerabilities and OWASP Top 10",
        "Experience with cloud security (AWS, GCP, or Azure) and Kubernetes security",
        "Proficiency in at least one programming language (Go, Python, or TypeScript)",
        "Experience building and integrating security tools into CI/CD pipelines",
      ],
      preferredQualifications: [
        "Experience in OT/ICS security or industrial control systems",
        "Security certifications (OSCP, CISSP, GWAPT, or equivalent)",
        "Experience with zero-trust architecture and implementation",
        "Background in cryptography or secure enclave technologies",
      ],
    },
    {
      title: "OT/ICS Security Specialist",
      location: "Hybrid — London",
      type: "Full-time",
      level: "Senior",
      description: "Protect industrial control systems and operational technology environments. You will bridge the gap between IT security and OT safety, ensuring that our platform and customer deployments meet the unique security requirements of manufacturing infrastructure.",
      responsibilities: [
        "Assess security posture of OT environments including PLCs, RTUs, SCADA, and DCS",
        "Develop security reference architectures for industrial control system deployments",
        "Conduct risk assessments and security audits of customer OT environments",
        "Design network segmentation and secure remote access solutions for OT networks",
        "Collaborate with engineering to build OT-aware security monitoring capabilities",
      ],
      requiredSkills: [
        "5+ years of OT/ICS security experience in manufacturing or critical infrastructure",
        "Deep knowledge of industrial protocols (Modbus, PROFINET, EtherNet/IP, OPC-UA)",
        "Understanding of Purdue model and ICS network architecture best practices",
        "Experience with OT vulnerability assessment and penetration testing",
        "Knowledge of relevant standards (IEC 62443, NIST CSF, NERC CIP)",
      ],
      preferredQualifications: [
        "Experience with digital twin or simulation platforms in security contexts",
        "Hands-on experience with major SCADA platforms (Wonderware, Ignition, AVEVA)",
        "CISSP, GICSP, or CSSA certification",
        "Background in electrical, controls, or instrumentation engineering",
      ],
    },
  ]},
  { dept: "Go-to-Market", icon: Globe, roles: [
    {
      title: "Enterprise Account Executive — DACH",
      location: "Frankfurt / Remote",
      type: "Full-time",
      level: "Senior",
      description: "Drive enterprise sales in the DACH region, one of our fastest-growing markets. You will engage with manufacturing leaders and digital transformation teams to deliver Korvixes' industrial simulation platform to Germany's premier industrial companies.",
      responsibilities: [
        "Develop and execute a territory plan for enterprise accounts in DACH region",
        "Build relationships with key stakeholders in manufacturing, engineering, and IT",
        "Lead complex enterprise sales cycles from prospecting through close",
        "Coordinate with solutions engineering for technical demonstrations and PoCs",
        "Accurately forecast revenue and maintain pipeline hygiene in CRM",
      ],
      requiredSkills: [
        "7+ years of enterprise B2B sales experience in industrial technology or SaaS",
        "Proven track record of exceeding $2M+ annual quotas in enterprise accounts",
        "Fluency in German and English (C1+ level required)",
        "Experience selling to manufacturing, automotive, or industrial companies",
        "Strong understanding of consultative selling methodology",
      ],
      preferredQualifications: [
        "Experience selling simulation, IoT, or industrial software platforms",
        "Existing network in German manufacturing or automotive sectors",
        "Experience with MEDDIC or similar enterprise sales frameworks",
        "Technical undergraduate degree in engineering or related field",
      ],
    },
    {
      title: "Solutions Engineer — Manufacturing",
      location: "Detroit / Remote",
      type: "Full-time",
      level: "Mid–Senior",
      description: "Serve as the technical bridge between Korvixes and prospective manufacturing customers. You will lead technical evaluations, deliver compelling demonstrations, and architect solutions that showcase the power of industrial simulation in real-world manufacturing scenarios.",
      responsibilities: [
        "Deliver technical demonstrations of the Korvixes platform to prospective customers",
        "Lead proof-of-concept engagements from technical scoping to successful completion",
        "Architect integration solutions connecting Korvixes with existing customer systems",
        "Develop demo assets, reference architectures, and technical collateral",
        "Provide feedback to product and engineering teams based on customer interactions",
      ],
      requiredSkills: [
        "5+ years in solutions engineering, technical sales, or customer-facing engineering",
        "Strong understanding of manufacturing operations and industrial automation",
        "Hands-on experience with APIs, scripting (Python/JavaScript), and data integration",
        "Excellent presentation and technical communication skills",
        "Ability to travel up to 25% for customer meetings and industry events",
      ],
      preferredQualifications: [
        "Experience with simulation, digital twin, or IoT platforms in manufacturing",
        "Background in automotive, aerospace, or discrete manufacturing industries",
        "Familiarity with MES, ERP, or PLM systems integration",
        "Engineering degree in mechanical, electrical, or industrial engineering",
      ],
    },
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
  const [selectedRole, setSelectedRole] = useState<RoleWithDept | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openJobModal = (role: RoleWithDept) => {
    setSelectedRole(role)
    setModalOpen(true)
  }

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
                {dept.roles.map((role) => {
                  const roleWithDept: RoleWithDept = { ...role, department: dept.dept, deptIcon: dept.icon }
                  return (
                    <button
                      key={role.title}
                      onClick={() => openJobModal(roleWithDept)}
                      className="w-full text-left hud-panel p-5 flex items-center gap-4 hover:border-primary/40 transition-all group cursor-pointer"
                    >
                      <div className="flex-1 min-w-0">
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
                    </button>
                  )
                })}
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
      <JobDetailModal
        role={selectedRole}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </PageLayout>
  )
}
