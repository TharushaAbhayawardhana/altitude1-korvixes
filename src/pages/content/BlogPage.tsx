import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"

const posts = [
  {
    id: "1",
    title: "Digital Twin Accuracy at Scale: How We Hit 99.8% Across 180+ Enterprise Workloads",
    excerpt: "A deep-dive into the simulation accuracy methodologies behind Korvixes Engine v4 — covering numerical solvers, real-time data assimilation, and our physics validation framework.",
    category: "Engineering",
    readTime: "12 min read",
    date: "May 28, 2026",
    featured: true,
  },
  {
    id: "2",
    title: "OT/IT Convergence: Securing Industrial Networks Without Sacrificing Performance",
    excerpt: "As industrial systems become increasingly connected, the security perimeter has dissolved. We explore how zero-trust architectures can be applied in latency-sensitive OT environments.",
    category: "Security",
    readTime: "8 min read",
    date: "May 14, 2026",
    featured: true,
  },
  {
    id: "3",
    title: "Predictive Maintenance vs. Digital Twin Simulation: A Practitioner's Comparison",
    excerpt: "Both approaches aim to prevent downtime. We break down where classical ML-based predictive maintenance falls short, and how simulation-based approaches close the gap.",
    category: "Product",
    readTime: "10 min read",
    date: "April 30, 2026",
    featured: false,
  },
  {
    id: "4",
    title: "How a Tier 1 Automotive Supplier Reduced Unplanned Downtime by 73%",
    excerpt: "A case study on deploying Korvixes across 14 stamping lines at a European automotive components manufacturer. From integration to measurable ROI in 90 days.",
    category: "Case Study",
    readTime: "7 min read",
    date: "April 15, 2026",
    featured: false,
  },
  {
    id: "5",
    title: "The Physics of Industrial Simulation: Why Most Digital Twins Get Thermodynamics Wrong",
    excerpt: "A technical exploration of common errors in thermal and fluid simulation in industrial digital twins, and the modeling choices that lead to them.",
    category: "Engineering",
    readTime: "15 min read",
    date: "March 28, 2026",
    featured: false,
  },
  {
    id: "6",
    title: "Korvixes Engine v4.2: Real-Time Latency Improvements and New API Capabilities",
    excerpt: "What's new in our latest platform release — including the sub-2ms latency breakthrough for synchronous simulation streams and the expanded digital twin composition API.",
    category: "Release",
    readTime: "5 min read",
    date: "March 12, 2026",
    featured: false,
  },
  {
    id: "7",
    title: "Smart Factory AI: Integrating LLM-based Reasoning into Simulation Pipelines",
    excerpt: "How we built the AI Simulation Intelligence layer — combining physics-based simulation with large language models for natural language interaction with industrial models.",
    category: "Engineering",
    readTime: "11 min read",
    date: "February 24, 2026",
    featured: false,
  },
  {
    id: "8",
    title: "IEC 62443 Compliance for Cloud-Based Industrial Platforms: A Practical Guide",
    excerpt: "Achieving IEC 62443 SL2 certification as a cloud-native SaaS provider isn't straightforward. We share our implementation journey, architectural decisions, and lessons learned.",
    category: "Security",
    readTime: "9 min read",
    date: "February 10, 2026",
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  Engineering: "text-accent border-accent/30 bg-accent/8",
  Security: "text-[#ff3355] border-[#ff3355]/30 bg-[#ff3355]/8",
  Product: "text-primary border-primary/30 bg-primary/8",
  "Case Study": "text-[#00e676] border-[#00e676]/30 bg-[#00e676]/8",
  Release: "text-[#f59e0b] border-[#f59e0b]/30 bg-[#f59e0b]/8",
}

export function BlogPage() {
  const featured = posts.filter(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <PageLayout
      title="Blog"
      subtitle="Engineering deep-dives, product updates, and industrial simulation insights from the Korvixes team."
      badge="Knowledge Base"
    >
      {/* Featured posts */}
      <div className="mb-16">
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// Featured</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {featured.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="hud-panel p-6 hover:border-primary/40 transition-all group cursor-pointer flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[9px] font-bold tracking-widest px-2 py-0.5 border ${categoryColors[post.category] || 'text-muted-foreground border-border/40'}`}
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {post.category.toUpperCase()}
                </span>
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <Clock className="w-3 h-3" strokeWidth={1.5} />
                  {post.readTime}
                </div>
              </div>
              <h3 className="text-sm font-bold text-foreground/90 mb-3 leading-snug group-hover:text-primary transition-colors flex-1" style={{ fontFamily: 'Orbitron, monospace' }}>
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                <span className="text-[10px] text-muted-foreground/50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{post.date}</span>
                <span className="flex items-center gap-1.5 text-[10px] text-primary/60 group-hover:text-primary transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* All posts */}
      <div>
        <h2 className="text-xs font-bold text-muted-foreground tracking-[0.25em] uppercase mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>// All Posts</h2>
        <div className="space-y-3">
          {rest.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="hud-panel p-5 flex items-start gap-4 hover:border-primary/30 transition-all group cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-[9px] font-bold tracking-widest px-2 py-0.5 border ${categoryColors[post.category] || 'text-muted-foreground border-border/40'}`}
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {post.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-muted-foreground/40" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{post.date}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground/40" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    <Clock className="w-2.5 h-2.5" strokeWidth={1.5} />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors mb-1.5" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground/70 leading-relaxed line-clamp-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {post.excerpt}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </motion.article>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
