import { useRef, useState, useEffect } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { motion, useInView } from "framer-motion"
import { PageLayout } from "@/components/layout/PageLayout"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Clock, Server, Wifi, Send, Terminal, ChevronRight, Shield } from "lucide-react"

const supportCategories = [
  { label: "Technical Support", icon: Server, description: "Platform issues, integration help, deployment assistance" },
  { label: "Enterprise Inquiry", icon: Shield, description: "Volume licensing, custom SLAs, dedicated infrastructure" },
  { label: "Simulation Demo", icon: Wifi, description: "Platform walkthrough, use case evaluation, PoC planning" },
]

const stagger = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
}

export function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const formInView = useInView(formRef, { once: true, margin: "-80px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const [state, handleSubmit, resetFormspree] = useForm("xzdqvrek")
  const [validationError, setValidationError] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const loading = state.submitting
  const formError = state.errors
    ? state.errors.getFormErrors().map((e) => e.message).join(". ")
    : null
  const error = validationError || formError

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true)
      setFormData({ name: "", email: "", company: "", subject: "", message: "" })
      const timer = setTimeout(() => setShowSuccess(false), 8000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidationError(null)
    setShowSuccess(false)

    const { name, email, company, subject, message } = formData
    const trimmed = {
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      subject: subject.trim(),
      message: message.trim(),
    }

    if (!trimmed.name || !trimmed.email || !trimmed.subject || !trimmed.message) {
      setValidationError("All required fields must be filled out.")
      return
    }

    resetFormspree()
    await handleSubmit(e)
  }

  return (
    <PageLayout
      title="Contact Korvixes"
      subtitle="Connect with our simulation engineering team"
      badge="Contact"
    >
      {/* Intro terminal block */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="hud-panel p-6 relative overflow-hidden mb-10"
      >
        <div className="absolute inset-0 bg-circuit opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="relative flex items-start gap-4">
          <Terminal className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-xs text-accent/90 leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="text-primary/70">&gt;</span>{" "}
              Submit a secure communication request. Our engineering team typically responds within{" "}
              <span className="text-primary font-semibold">4 hours</span> during business hours.
            </p>
            <p className="text-xs text-accent/70 leading-relaxed mt-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="text-primary/70">&gt;</span>{" "}
              All transmissions are encrypted via TLS 1.3. Enterprise customers may also reach us through
              dedicated support channels.
              <span className="inline-block w-2 h-3.5 bg-accent ml-1 animate-blink-cursor align-middle" />
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main grid: Form + Info Panel */}
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Form section */}
        <div className="lg:col-span-3" ref={formRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="hud-panel p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="relative">
              {/* Form header */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-6 h-6 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Mail className="w-3 h-3 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] text-primary tracking-[0.25em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Secure Transmission Form
                </span>
              </div>

              <form onSubmit={onSubmit} className="space-y-5">
                <motion.div custom={0} variants={stagger} initial="hidden" animate={formInView ? "visible" : "hidden"}>
                  <label className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1.5 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-background/50 border-border/50 focus-visible:border-primary/60 focus-visible:ring-primary/20"
                    required
                  />
                  <ValidationError field="name" errors={state.errors} className="text-[10px] text-destructive mt-1" />
                </motion.div>

                <motion.div custom={1} variants={stagger} initial="hidden" animate={formInView ? "visible" : "hidden"}>
                  <label className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1.5 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="bg-background/50 border-border/50 focus-visible:border-primary/60 focus-visible:ring-primary/20"
                    required
                  />
                  <ValidationError field="email" errors={state.errors} className="text-[10px] text-destructive mt-1" />
                </motion.div>

                <motion.div custom={2} variants={stagger} initial="hidden" animate={formInView ? "visible" : "hidden"}>
                  <label className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1.5 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    Company Name <span className="text-muted-foreground/40">(optional)</span>
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="bg-background/50 border-border/50 focus-visible:border-primary/60 focus-visible:ring-primary/20"
                  />
                </motion.div>

                <motion.div custom={3} variants={stagger} initial="hidden" animate={formInView ? "visible" : "hidden"}>
                  <label className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1.5 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    Subject <span className="text-destructive">*</span>
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="bg-background/50 border-border/50 focus-visible:border-primary/60 focus-visible:ring-primary/20"
                    required
                  />
                  <ValidationError field="subject" errors={state.errors} className="text-[10px] text-destructive mt-1" />
                </motion.div>

                <motion.div custom={4} variants={stagger} initial="hidden" animate={formInView ? "visible" : "hidden"}>
                  <label className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1.5 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry in detail..."
                    className="min-h-[120px] bg-background/50 border-border/50 focus-visible:border-primary/60 focus-visible:ring-primary/20"
                    required
                  />
                  <ValidationError field="message" errors={state.errors} className="text-[10px] text-destructive mt-1" />
                </motion.div>

                <motion.div custom={5} variants={stagger} initial="hidden" animate={formInView ? "visible" : "hidden"}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative cyber-chamfer btn-shimmer border border-primary/60 hover:border-primary hover:glow-blue text-primary text-sm font-bold tracking-widest uppercase px-8 py-3 transition-all duration-200 flex items-center gap-3 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    <span className="relative z-10">{loading ? "Sending..." : "Send Transmission"}</span>
                    <Send className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent animate-beam" />
                    </div>
                  </button>
                </motion.div>

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 border border-accent/30 bg-accent/5"
                  >
                    <Shield className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                    <span className="text-xs text-accent/90" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      &gt; Message sent successfully
                    </span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 border border-destructive/30 bg-destructive/5"
                  >
                    <Shield className="w-4 h-4 text-destructive shrink-0" strokeWidth={1.5} />
                    <span className="text-xs text-destructive/90" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      &gt; {error}
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Info Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hud-panel p-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Terminal className="w-3 h-3 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] text-primary tracking-[0.25em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Contact Channel
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 border border-border/30 bg-background/30">
                  <Mail className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[9px] text-muted-foreground tracking-widest uppercase mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Primary Channel
                    </div>
                    <a href="mailto:connect@korvixes.one" className="text-xs text-accent hover:text-glow-cyan transition-all" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      connect@korvixes.one
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border border-border/30 bg-background/30">
                  <Clock className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[9px] text-muted-foreground tracking-widest uppercase mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Response Time
                    </div>
                    <div className="text-xs text-foreground/80" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      &lt; 4 hours (business)
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border border-border/30 bg-background/30">
                  <Mail className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[9px] text-muted-foreground tracking-widest uppercase mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Corporate Office
                    </div>
                    <div className="text-xs text-foreground/80" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      1 Market Plaza, Floor 11, San Francisco, CA 94105, USA
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border border-border/30 bg-background/30">
                  <Terminal className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[9px] text-muted-foreground tracking-widest uppercase mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Phone
                    </div>
                    <div className="text-xs text-foreground/80" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      +1 (415) 555-0166
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border border-border/30 bg-background/30">
                  <Server className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-[9px] text-muted-foreground tracking-widest uppercase mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      System Availability
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full status-dot-green animate-blink" />
                      <span className="text-xs text-[#00e676]/80" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        99.98% Uptime — 24/7/365
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Support Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hud-panel p-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Wifi className="w-3 h-3 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] text-primary tracking-[0.25em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Support Categories
                </span>
              </div>

              <div className="space-y-3">
                {supportCategories.map((cat, i) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="group p-3 border border-border/30 hover:border-primary/30 bg-background/30 hover:bg-background/50 transition-all duration-200 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 cyber-chamfer-sm bg-primary/8 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/15 transition-all duration-200">
                        <cat.icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-bold text-foreground/90 tracking-wide uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>
                          {cat.label}
                        </div>
                        <div className="text-[9px] text-muted-foreground leading-relaxed mt-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          {cat.description}
                        </div>
                      </div>
                      <ChevronRight className="w-3 h-3 text-muted-foreground/40 group-hover:text-primary/60 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  )
}
