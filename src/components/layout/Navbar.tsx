import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Hexagon } from "lucide-react"

const navLinks = [
  { label: "Platform", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Simulation", href: "#simulation" },
  { label: "Solutions", href: "#use-cases" },
  { label: "Technology", href: "#technology" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong border-b border-primary/20 shadow-[0_4px_30px_rgba(42,107,219,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 cyber-chamfer-sm bg-primary/15 border border-primary/40 flex items-center justify-center group-hover:glow-blue-sm transition-all duration-300">
            <Hexagon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-bold text-lg tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="gradient-text">Korvi</span>
            <span className="text-foreground">xes</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors duration-200 group"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors px-3 py-2">
            Sign In
          </button>
          <button
            className="relative cyber-chamfer-sm bg-primary/10 border border-primary/50 hover:border-primary hover:bg-primary/20 text-primary hover:glow-blue text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-200 flex items-center gap-2"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Request Demo
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-strong border-t border-primary/20"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors terminal-prompt"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border/40 flex flex-col gap-2 mt-1">
                <button className="w-full cyber-chamfer-sm border border-border/60 text-muted-foreground text-xs tracking-widest uppercase py-2.5 hover:border-primary/40 hover:text-primary transition-all">Sign In</button>
                <button className="w-full cyber-chamfer-sm bg-primary/15 border border-primary/50 text-primary text-xs tracking-widest uppercase py-2.5 font-semibold hover:glow-blue transition-all">Request Demo</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
