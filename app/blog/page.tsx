export default function Blog() {
  const posts = [
    {
      date: "Feb 26, 2026",
      category: "Infrastructure",
      title: "Building GPU Clusters for AI Inference",
      excerpt: "Design patterns for scaling AI compute, H100/H200/B200 architecture, and token-per-watt optimization strategies for production inference workloads.",
      readTime: "8 min read",
      slug: "#"
    },
    {
      date: "Feb 20, 2026",
      category: "Automation",
      title: "Enterprise Automation Patterns",
      excerpt: "Designing automation frameworks that integrate disparate systems, reduce manual overhead, and scale across enterprises without creating technical debt.",
      readTime: "6 min read",
      slug: "#"
    },
    {
      date: "Feb 15, 2026",
      category: "AI/ML",
      title: "Optimizing LLM Inference at Scale",
      excerpt: "Practical techniques for reducing latency and cost in production LLM deployments, from model quantization to intelligent request batching.",
      readTime: "10 min read",
      slug: "#"
    },
    {
      date: "Feb 10, 2026",
      category: "DevOps",
      title: "Infrastructure-as-Code Best Practices",
      excerpt: "Lessons learned from managing complex infrastructure with Terraform and Ansible. Patterns for maintainability, testing, and team collaboration.",
      readTime: "7 min read",
      slug: "#"
    }
  ]

  const categoryColors: Record<string, string> = {
    "Infrastructure": "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
    "Automation": "text-blue-400 bg-blue-400/10 border-blue-400/20",
    "AI/ML": "text-purple-400 bg-purple-400/10 border-purple-400/20",
    "DevOps": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="mb-8">
              <span className="badge">Blog</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              <span className="cyber-gradient">Insights & Articles</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Thoughts on infrastructure, automation, AI systems, and building technology that scales. 
              Practical insights from real-world implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <article 
                key={index}
                className="group relative bg-dark-800/60 border border-dark-600/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-accent-cyan/30 hover:-translate-y-1 hover:shadow-glow"
              >
                <a href={post.slug} className="block p-8">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-dark-600/50">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <span className="text-sm text-accent-cyan group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read article 
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 border-t border-dark-600/30">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-8">
            Get notified when new articles are published. No spam, just insights on 
            infrastructure and automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-dark-800/80 border border-dark-600/50 rounded-lg text-white placeholder-gray-500 focus:border-accent-cyan/50 focus:outline-none transition-colors"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-gray-600 mt-4">
            Unsubscribe anytime. Your email is safe with me.
          </p>
        </div>
      </section>
    </div>
  )
}
