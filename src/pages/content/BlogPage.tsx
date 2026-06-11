import { useState, useCallback } from "react"
import { PageLayout } from "@/components/layout/PageLayout"
import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import { posts, categoryColors, type BlogPost } from "@/data/blog"
import { BlogDetailModal } from "@/components/blog/BlogDetailModal"

export function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = useCallback((post: BlogPost) => {
    setSelectedPost(post)
    setModalOpen(true)
  }, [])

  const safePosts = posts ?? []
  const featured = safePosts.filter(p => p.featured)
  const rest = safePosts.filter(p => !p.featured)

  if (safePosts.length === 0) {
    return (
      <PageLayout
        title="Blog"
        subtitle="Engineering deep-dives, product updates, and industrial simulation insights from the Korvixes team."
        badge="Knowledge Base"
      >
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            No blog posts available yet. Check back soon.
          </p>
        </div>
      </PageLayout>
    )
  }

  return (
    <>
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
              onClick={() => openModal(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openModal(post) }}
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
              onClick={() => openModal(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openModal(post) }}
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
      <BlogDetailModal
        post={selectedPost}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  )
}
