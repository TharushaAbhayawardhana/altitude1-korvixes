import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import { posts, categoryColors, BlogPost } from "@/data/blog"
import { BlogDetailModal } from "@/components/blog/BlogDetailModal"

export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const featured = posts.filter((p) => p.featured)
  const rest = posts.filter((p) => !p.featured).slice(0, 4)

  const openPost = (post: BlogPost) => {
    setSelectedPost(post)
    setModalOpen(true)
  }

  return (
    <>
      <section className="relative py-16 md:py-28 overflow-hidden" ref={ref}>
        {/* Background */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(59,196,232,0.04) 0%, transparent 70%)'
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-primary/30 bg-primary/5 cyber-chamfer-sm"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="w-1 h-1 rounded-full bg-primary animate-blink" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">// Blog</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ fontFamily: 'Orbitron, monospace' }}>
              LATEST{" "}
              <span className="gradient-text text-glow-blue">INSIGHTS</span>
            </h2>
            <p className="text-muted-foreground text-xs max-w-2xl mx-auto leading-relaxed tracking-wide"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Engineering deep-dives, product updates, and industrial simulation
              insights from the Korvixes team.
            </p>
          </motion.div>

          {/* Featured posts */}
          <div className="mb-14">
            <h3 className="text-[11px] font-bold text-muted-foreground tracking-[0.25em] uppercase mb-6"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              // Featured
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {featured.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="hud-panel p-6 hover:border-primary/40 transition-all group cursor-pointer flex flex-col relative overflow-hidden"
                  onClick={() => openPost(post)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openPost(post) }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[9px] font-bold tracking-widest px-2 py-0.5 border ${categoryColors[post.category] || "text-muted-foreground border-border/40"}`}
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
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
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

          {/* All Posts */}
          <div className="mb-12">
            <h3 className="text-[11px] font-bold text-muted-foreground tracking-[0.25em] uppercase mb-6"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              // All Posts
            </h3>
            <div className="space-y-3">
              {rest.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="hud-panel p-5 flex items-start gap-4 hover:border-primary/30 transition-all group cursor-pointer"
                  onClick={() => openPost(post)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openPost(post) }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className={`text-[9px] font-bold tracking-widest px-2 py-0.5 border ${categoryColors[post.category] || "text-muted-foreground border-border/40"}`}
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {post.category.toUpperCase()}
                      </span>
                      <span className="text-[10px] text-muted-foreground/40" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{post.date}</span>
                      <span className="text-muted-foreground/30 hidden sm:inline">·</span>
                      <div className="hidden sm:flex items-center gap-1 text-[10px] text-muted-foreground/40" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
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
                  <ArrowRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-5" />
                </motion.article>
              ))}
            </div>
          </div>

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-primary/70 hover:text-primary transition-colors group"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              View All Posts
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <BlogDetailModal
        post={selectedPost}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  )
}
