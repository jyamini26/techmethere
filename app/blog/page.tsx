export default function Blog() {
  const articles = [
    {
      date: 'Feb 26, 2026',
      title: 'Building GPU Clusters for AI Inference',
      description: 'Design patterns for scaling AI compute, H100/H200/B200 architecture, and token-per-watt optimization strategies.',
      href: '#'
    },
    {
      date: 'Feb 20, 2026',
      title: 'Enterprise Automation Patterns',
      description: 'Designing automation frameworks that integrate disparate systems, reduce manual overhead, and scale across enterprises.',
      href: '#'
    }
  ]

  return (
    <div className="min-h-screen py-32 md:py-48">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 cyber-gradient">Blog</h1>
        <p className="text-xl text-gray-300 mb-16 max-w-2xl">
          Insights on infrastructure, automation, and AI-driven transformation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="card p-8 md:p-10 group flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <time className="text-sm font-medium text-gray-400">
                  {article.date}
                </time>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-colors flex items-center justify-center">
                  <span className="text-cyan-400 text-xs">→</span>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors flex-grow">
                {article.title}
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                {article.description}
              </p>
              
              <a 
                href={article.href}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group/link"
              >
                Read article
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
