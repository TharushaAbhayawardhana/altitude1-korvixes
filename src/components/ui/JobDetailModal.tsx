import { useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, Terminal, MapPin, BarChart3, ListChecks, Star, Briefcase, ArrowUpRight } from "lucide-react"

export interface JobRole {
  title: string
  location: string
  type: string
  level: string
  description: string
  responsibilities: string[]
  requiredSkills: string[]
  preferredQualifications: string[]
}

interface JobDetailModalProps {
  role: (JobRole & { department: string; deptIcon: React.ComponentType<{ className?: string; strokeWidth?: number }> }) | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const contentVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: 16 },
}

export function JobDetailModal({ role, open, onOpenChange }: JobDetailModalProps) {
  const close = useCallback(() => onOpenChange(false), [onOpenChange])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [open, close])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close()
  }, [close])

  if (!role) return null

  const DeptIcon = role.deptIcon

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-0 md:p-6"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={overlayVariants}
            transition={{ duration: 0.2 }}
            onClick={handleOverlayClick}
          />

          <motion.div
            variants={contentVariants}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full h-full md:h-auto md:max-h-[85vh] md:max-w-2xl lg:max-w-3xl
              bg-background/95 backdrop-blur-sm
              md:rounded-lg md:border md:border-primary/25
              flex flex-col overflow-hidden
              md:shadow-2xl"
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

            {/* Drag handle for mobile */}
            <div className="md:hidden flex justify-center pt-3 pb-1">
              <div className="h-1.5 w-12 rounded-full bg-border/60" />
            </div>

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-8 h-8 flex items-center justify-center rounded-sm border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            {/* Header */}
            <div className="px-6 md:px-8 pt-2 md:pt-8 pb-5 border-b border-border/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 cyber-chamfer-sm bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <DeptIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-sm md:text-base font-bold text-foreground/90 leading-snug pr-6" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {role.title}
                  </h2>
                  <span className="text-[10px] text-primary tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {role.department}
                  </span>
                </div>
              </div>

              {/* Meta badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] border border-primary/20 bg-primary/5 text-primary tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <Briefcase className="w-3 h-3" strokeWidth={1.5} />
                  {role.type}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] border border-accent/20 bg-accent/5 text-accent tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <MapPin className="w-3 h-3" strokeWidth={1.5} />
                  {role.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] border border-[#00e676]/20 bg-[#00e676]/5 text-[#00e676] tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <BarChart3 className="w-3 h-3" strokeWidth={1.5} />
                  {role.level}
                </span>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 pt-5">
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="w-3 h-3 text-primary" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Description
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground/90 leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {role.description}
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ListChecks className="w-3 h-3 text-primary" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Responsibilities
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground/90 leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        <span className="text-primary/50 mt-0.5 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Skills */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-3 h-3 text-primary" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Required Skills
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {role.requiredSkills.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground/90 leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        <span className="text-accent/60 mt-0.5 shrink-0">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Preferred Qualifications */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-3 h-3 text-accent" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Preferred Qualifications
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {role.preferredQualifications.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground/90 leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        <span className="text-accent/50 mt-0.5 shrink-0">◇</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Bottom bar */}
            <div className="px-6 md:px-8 py-3 border-t border-border/30 bg-black/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground/50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <Terminal className="w-3 h-3" strokeWidth={1.5} />
                  <span>korvixes.careers — position details</span>
                </div>
                <a
                  href={`mailto:connect@korvixes.one?subject=Application for ${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center gap-1 text-[10px] text-primary/70 hover:text-primary transition-colors"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Apply via email
                  <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(modal, document.body)
}
