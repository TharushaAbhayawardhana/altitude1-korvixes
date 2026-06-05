import { Hexagon, GitBranch, MessageSquare, Share2, Terminal } from "lucide-react"

const footerLinks = {
  Platform: ["Overview", "Features", "Simulation Engine", "Integrations", "Changelog"],
  Solutions: ["Manufacturing", "Energy Systems", "Smart Factory", "Industrial IoT"],
  Company: ["About Us", "Careers", "Blog", "Press Kit", "Partners"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
}

export function Footer() {
  return (
    <footer className="relative border-t border-primary/15" style={{ background: '#050508' }}>
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-9 h-9 cyber-chamfer-sm bg-primary/15 border border-primary/40 flex items-center justify-center group-hover:glow-blue-sm transition-all duration-300">
                <Hexagon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="font-bold text-lg tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>
                <span className="gradient-text">Korvi</span>
                <span className="text-foreground">xes</span>
              </span>
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-xs tracking-wide"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Digital Twin & Industrial Simulation Platform.
              The intelligence layer for modern industrial operations.
            </p>

            {/* Docs link */}
            <div className="flex items-center gap-2 mb-5 px-3 py-2 border border-border/40 bg-background/50 cyber-chamfer-sm w-fit">
              <Terminal className="w-3 h-3 text-accent" />
              <a href="#" className="text-[10px] text-accent tracking-widest uppercase hover:text-glow-cyan transition-all"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Developer API — Coming Soon
              </a>
            </div>

            <div className="flex items-center gap-2">
              {[GitBranch, MessageSquare, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 cyber-chamfer-sm border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-blue-sm transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-foreground mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {`// ${category}`}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide group flex items-center gap-1"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      <span className="text-border group-hover:text-primary/40 transition-colors text-[8px]">▸</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <span className="text-primary/40">$</span> &copy; {new Date().getFullYear()} Korvixes Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full status-dot-green" />
            <span className="text-[10px] text-muted-foreground tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
