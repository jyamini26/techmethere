export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent opacity-50" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-44 text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/80 border border-dark-600/50 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-400">Founder & CEO of Syzen.ai</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              <span className="cyber-gradient">Infrastructure.</span>
              <br />
              <span className="cyber-gradient">Automation.</span>
              <br />
              <span className="cyber-gradient">AI.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Building the future of enterprise automation and education technology.
              15+ years designing systems that scale.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="btn-primary">
                Explore Services
              </a>
              <a href="/about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title cyber-gradient">Companies</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Leading ventures in AI automation, education technology, and enterprise infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Syzen.ai Card */}
            <div className="group relative card card-hover card-shine">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-blue-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <h3 className="text-xl font-bold text-white">Syzen.ai</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Enterprise automation consultancy specializing in AI-driven transformation 
                for mid-market and enterprise organizations.
              </p>
              <div className="mt-6 pt-4 border-t border-dark-600/50">
                <span className="text-sm text-accent-cyan">AI Automation</span>
              </div>
            </div>

            {/* Respond EDU Card */}
            <div className="group relative card card-hover card-shine">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <h3 className="text-xl font-bold text-white">Respond EDU</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                AI-powered education platform expanding globally with white-label partnerships 
                across Europe and Middle East.
              </p>
              <div className="mt-6 pt-4 border-t border-dark-600/50">
                <span className="text-sm text-purple-400">EdTech Platform</span>
              </div>
            </div>

            {/* TechMe There Card */}
            <div className="group relative card card-hover card-shine">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
                <h3 className="text-xl font-bold text-white">TechMe There</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                10+ years of datacenter infrastructure and systems automation expertise 
                serving enterprise clients.
              </p>
              <div className="mt-6 pt-4 border-t border-dark-600/50">
                <span className="text-sm text-emerald-400">Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-dark-600/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold cyber-gradient mb-2">15+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold cyber-gradient mb-2">3</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Companies Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold cyber-gradient mb-2">50+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold cyber-gradient mb-2">5</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to transform your infrastructure?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how AI automation and modern infrastructure can accelerate your business.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
