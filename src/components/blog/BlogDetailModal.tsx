import { useEffect, useCallback, useRef } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { BlogPost } from "@/data/blog"
import { categoryColors } from "@/data/blog"

interface BlogDetailModalProps {
  post: BlogPost | null
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

export function BlogDetailModal({ post, open, onOpenChange }: BlogDetailModalProps) {
  const contentRef = useRef<HTMLDivElement>(null)

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

  if (!post) return null

  const paragraphs = post.content.split("\n\n")
  const colorClass = categoryColors[post.category] || "text-muted-foreground border-border/40"

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
            ref={contentRef}
            variants={contentVariants}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full h-full md:h-auto md:max-h-[85vh] md:max-w-2xl lg:max-w-3xl
              bg-background/95 backdrop-blur-sm
              md:rounded-lg md:border md:border-border/50
              flex flex-col overflow-hidden
              md:shadow-2xl"
          >
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

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 pt-2 md:pt-8">
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 mb-4 pr-8">
                <span
                  className={`text-[10px] font-bold tracking-widest px-2 py-0.5 border ${colorClass}`}
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {post.category.toUpperCase()}
                </span>
                <span className="text-[11px] text-muted-foreground/50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {post.date}
                </span>
                <span className="text-muted-foreground/30">·</span>
                <span className="text-[11px] text-muted-foreground/50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-xl md:text-2xl font-bold text-foreground/90 mb-4 leading-snug pr-8"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                {post.title}
              </h2>

              {/* Author */}
              {post.author && (
                <div className="flex items-center gap-3 mb-6 p-3 bg-muted/30 border border-border/20">
                  <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground/80" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {post.author}
                    </p>
                    {post.authorRole && (
                      <p className="text-[10px] text-muted-foreground/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {post.authorRole}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Separator */}
              <div className="h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent mb-6" />

              {/* Content */}
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(modal, document.body)
}
