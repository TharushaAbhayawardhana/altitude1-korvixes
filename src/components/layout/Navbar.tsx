import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { Menu, X, ChevronRight, Hexagon } from "lucide-react"
import { useNavigateToSection } from "@/hooks/useNavigateToSection"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Contact", to: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const navigateToSection = useNavigateToSection()

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/"
    return location.pathname.startsWith(to)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (to: string) => {
    setMobileOpen(false)
    if (to.startsWith("/#")) {
      const sectionId = to.replace("/#", "")
      navigateToSection(sectionId)
    } else {
      navigate(to)
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "glass-strong border-b border-primary/20 shadow-[0_4px_40px_rgba(42,107,219,0.12)]"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      )}

      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 cyber-chamfer-sm bg-primary/12 border border-primary/40 flex items-center justify-center group-hover:glow-blue-sm group-hover:bg-primary/20 transition-all duration-300">
            <Hexagon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
            {/* Scan line on hover */}
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute left-0 right-0 h-px bg-accent/70 animate-scan" />
            </div>
          </div>
          <span className="font-bold text-lg tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="gradient-text">Korvi</span>
            <span className="text-foreground/90">xes</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className={`relative px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-200 group ${
                isActive(link.to) ? "text-accent" : "text-muted-foreground hover:text-accent"
              }`}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span className="relative z-10">{link.label}</span>
              {/* Underline */}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-accent transition-all duration-300 ${
                isActive(link.to) ? "w-full" : "w-0 group-hover:w-full"
              }`} />
              {/* Hover bg */}
              <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-all duration-200" />
            </Link>
          ))}
        </nav>

        {/* CTA — System Gateway */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/product"
            className="relative group px-4 py-2 flex items-center gap-2.5 overflow-hidden"
          >
            {/* Base cyber chamfer border */}
            <div className="absolute inset-0 cyber-chamfer-sm border border-primary/40 group-hover:border-accent/50 transition-all duration-300" />
            {/* Background gradient */}
            <div className="absolute inset-0 cyber-chamfer-sm bg-gradient-to-r from-primary/10 via-primary/5 to-transparent group-hover:from-accent/10 group-hover:via-accent/5 transition-all duration-500" />
            {/* Hover glow aura */}
            <div className="absolute inset-0 cyber-chamfer-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 24px rgba(59,196,232,0.08), 0 0 20px rgba(42,107,219,0.08)' }} />
            {/* Hover beam scans */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent animate-beam" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-beam" style={{ animationDelay: '0.8s' }} />
            </div>
            {/* Terminal corner accents */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-primary/30 group-hover:border-accent/60 transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-primary/30 group-hover:border-accent/60 transition-colors duration-300" />
            {/* Status indicator — live pulse */}
            <span className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
            {/* System label */}
            <span className="relative text-xs tracking-widest flex items-center gap-0" style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="text-primary font-bold group-hover:text-accent transition-colors duration-300">KX</span>
              <span className="text-muted-foreground/30 mx-[1px]">_</span>
              <span className="text-foreground/80 group-hover:text-foreground font-semibold tracking-[0.15em] transition-colors duration-300">ENGINE</span>
            </span>
            {/* Arrow */}
            <ChevronRight className="w-3 h-3 relative text-primary/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300" />
          </Link>
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
            transition={{ duration: 0.22 }}
            className="md:hidden glass-strong border-t border-primary/20"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="px-3 py-3 text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors terminal-prompt"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border/40 flex flex-col gap-2 mt-1">
                <Link
                  to="/product"
                  onClick={() => setMobileOpen(false)}
                  className="w-full cyber-chamfer-sm bg-primary/15 border border-primary/50 text-primary text-xs tracking-widest uppercase py-2.5 font-semibold hover:glow-blue transition-all flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow shrink-0" />
                  <span className="text-primary font-bold">KX</span>
                  <span className="text-muted-foreground/30">_</span>
                  <span className="text-foreground/80">ENGINE</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
