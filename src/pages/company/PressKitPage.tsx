import { useState } from "react"
import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { Download, FileText, Image, Mail, Check } from "lucide-react"

const assets = [
  { name: "Logo Pack (SVG + PNG)", desc: "All logo variants: horizontal, stacked, icon-only. Light, dark, and monochrome versions.", size: "4.2 MB", type: "ZIP" },
  { name: "Brand Guidelines", desc: "Full brand guide covering color system, typography, spacing, and usage rules.", size: "12.8 MB", type: "PDF" },
  { name: "Product Screenshots", desc: "High-resolution platform screenshots for editorial and press use.", size: "38 MB", type: "ZIP" },
  { name: "Executive Headshots", desc: "Professional headshots of Korvixes leadership team in hi-res.", size: "22 MB", type: "ZIP" },
  { name: "Company Overview Deck", desc: "Investor and press overview of Korvixes platform, metrics, and mission.", size: "6.1 MB", type: "PDF" },
  { name: "Product Demo Video", desc: "3-minute platform walkthrough video in 4K. Cleared for editorial use.", size: "480 MB", type: "MP4" },
]

const pressContacts = [
  { region: "Global / UK", name: "Communications Team", email: "press@korvixes.io" },
  { region: "North America", name: "NA Press Desk", email: "press.na@korvixes.io" },
  { region: "DACH / Europe", name: "EMEA Press Desk", email: "press.emea@korvixes.io" },
  { region: "APAC", name: "APAC Press Desk", email: "press.apac@korvixes.io" },
]

const boilerplate = `Korvixes is the leading Industrial Simulation Platform for Digital Twin intelligence. Trusted by 180+ enterprise manufacturers, energy operators, and infrastructure providers across 40+ countries, Korvixes enables real-time simulation of industrial systems with 99.8% physics accuracy and sub-millisecond latency.

The Korvixes platform powers predictive operations, intelligence driven maintenance, and intelligent system design for the world's most demanding industrial environments — from automotive assembly lines to national power grids.

Korvixes is headquartered in London, with engineering hubs in Singapore and Frankfurt. The company is backed by Accel, Tiger Global, and Threshold Ventures.

For more information, visit korvixes.io.`

export function PressKitPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(boilerplate)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback for older browsers
      const ta = document.createElement("textarea")
      ta.value = boilerplate
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <PageLayout
      title="Press Kit"
      subtitle="Official Korvixes brand assets, boilerplate, and media contacts for press and editorial use."
      badge="Media Resources"
    >
      {/* Downloads */}
      <div className="mb-16">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Brand Assets</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {assets.map((asset, i) => (
            <motion.div
              key={asset.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="hud-panel p-5 flex items-start gap-4 hover:border-primary/30 transition-all group"
            >
              <div className="w-9 h-9 cyber-chamfer-sm bg-primary/8 border border-primary/25 flex items-center justify-center shrink-0">
                {asset.type === 'PDF' ? <FileText className="w-4 h-4 text-primary" strokeWidth={1.5} /> : <Image className="w-4 h-4 text-primary" strokeWidth={1.5} />}
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-foreground/90 mb-1 group-hover:text-primary transition-colors" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {asset.name}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {asset.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground/40" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <span className="text-accent/50">{asset.type}</span>
                  <span className="text-border">·</span>
                  <span>{asset.size}</span>
                </div>
              </div>
              <Download className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary transition-colors shrink-0 mt-1" strokeWidth={1.5} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Company boilerplate */}
      <div className="mb-16">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Official Boilerplate</h2>
        <div className="hud-panel p-0 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-primary/15 bg-black/40">
            <span className="text-[10px] text-muted-foreground tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>boilerplate.txt — approved for press use</span>
            <button onClick={handleCopy} className="flex items-center gap-1.5 text-[10px] text-primary/60 hover:text-primary transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {copied ? <Check className="w-3 h-3" strokeWidth={1.5} /> : <Download className="w-3 h-3" strokeWidth={1.5} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="px-6 py-5">
            <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {boilerplate}
            </p>
          </div>
        </div>
      </div>

      {/* Press contacts */}
      <div className="mb-16">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Press Contacts</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {pressContacts.map((contact, i) => (
            <motion.div
              key={contact.region}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="hud-panel p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group"
            >
              <div className="w-8 h-8 cyber-chamfer-sm bg-primary/8 border border-primary/25 flex items-center justify-center">
                <Mail className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground/50 tracking-widest uppercase mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{contact.region}</div>
                <div className="text-xs font-semibold text-foreground/80 mb-0.5" style={{ fontFamily: 'Orbitron, monospace' }}>{contact.name}</div>
                <a href={`mailto:${contact.email}`} className="text-xs text-accent/70 hover:text-accent transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{contact.email}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-6 border border-primary/20 bg-primary/5 cyber-chamfer">
        <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <span className="text-primary mr-2">▸</span>
          All Korvixes brand assets are provided for editorial, press, and journalistic use only. Commercial use, modification of logos, or use in competitive contexts requires written authorization from Korvixes Marketing. Contact <span className="text-accent">brand@korvixes.io</span> for licensing inquiries.
        </p>
      </div>
    </PageLayout>
  )
}
