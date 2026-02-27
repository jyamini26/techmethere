export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-32 md:py-48 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold cyber-gradient leading-tight">
            Infrastructure. <br className="hidden sm:inline" />Automation. AI.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Founder & CEO of Syzen.ai. Building the future of enterprise automation and education technology with cutting-edge infrastructure solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/services" className="btn-primary text-center">
              Explore Services
            </a>
            <a href="/about" className="btn-secondary text-center">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 md:py-32 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-header">Companies & Ventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: 'Syzen.ai',
                description: 'Enterprise automation consultancy specializing in AI-driven transformation for mid-market and enterprise organizations.'
              },
              {
                name: 'Respond EDU',
                description: 'AI-powered education platform expanding globally with white-label partnerships across Europe and Middle East.'
              },
              {
                name: 'TechMe There',
                description: '10+ years of datacenter infrastructure and systems automation expertise serving enterprise clients.'
              }
            ].map((company) => (
              <div key={company.name} className="card p-8 group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {company.name}
                  </h3>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-colors"></div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 cyber-gradient">
            Ready to transform your infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let&apos;s discuss how Syzen.ai can help scale your enterprise.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
