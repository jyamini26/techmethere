export default function RespondEDU() {
  const features = [
    {
      title: "AI-Powered LMS",
      description: "Real-time student adaptation with personalized learning paths that evolve based on performance and engagement.",
      icon: "🎯"
    },
    {
      title: "Actionable Analytics",
      description: "Rich metadata insights for teachers, enabling data-driven decisions and early intervention.",
      icon: "📊"
    },
    {
      title: "Administrative Automation",
      description: "Streamlined operations that reduce administrative burden and free educators to focus on teaching.",
      icon: "⚡"
    },
    {
      title: "Modern Interface",
      description: "Radically simpler than PowerSchool or GoGuardian. Intuitive design that requires minimal training.",
      icon: "✨"
    },
    {
      title: "Rapid Onboarding",
      description: "Get up and running in days, not months. Seamless migration and comprehensive support.",
      icon: "🚀"
    },
    {
      title: "Full Localization",
      description: "Multi-language support with regional compliance built in. Ready for international deployment.",
      icon: "🌍"
    }
  ]

  const expansionRegions = [
    { name: "Switzerland", flag: "🇨🇭" },
    { name: "Dubai", flag: "🇦🇪" },
    { name: "Mexico", flag: "🇲🇽" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "Norway", flag: "🇳🇴" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                Education Technology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Respond EDU
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              AI-powered education platform leveraging advanced AI to streamline school 
              administration and transform how educators interact with learning data.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://www.respondedu.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit Website
              </a>
              <a href="#features" className="btn-secondary">
                See Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 md:py-24 border-t border-dark-600/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Platform Features
              </span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Built for modern education with AI at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-dark-800/60 border border-dark-600/50 rounded-xl p-6 transition-all duration-300 hover:border-purple-400/30 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Expansion */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-dark-800/40 border border-dark-600/50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Global Expansion
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  White-label partnerships expanding across multiple continents. Respond EDU 
                  is positioned as an international platform with full localization and 
                  regulatory compliance across jurisdictions.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Our adaptable architecture allows seamless deployment in diverse educational 
                  systems while maintaining consistent quality and performance.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                {expansionRegions.map((region, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 px-5 py-3 bg-dark-700/50 border border-dark-600/50 rounded-xl"
                  >
                    <span className="text-2xl">{region.flag}</span>
                    <span className="text-white font-medium">{region.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24 border-t border-dark-600/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-2">Future Roadmap</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>
            <div className="md:col-span-2">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-3 h-3 mt-2 rounded-full bg-purple-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Neuroscience Integration</h3>
                    <p className="text-gray-400">
                      Integrating neuroscience and developmental psychology research to 
                      personalize learning experiences from an earlier age.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-3 h-3 mt-2 rounded-full bg-pink-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Adaptive Assessment</h3>
                    <p className="text-gray-400">
                      AI-driven assessment tools that adapt in real-time, providing more 
                      accurate measures of student understanding.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-3 h-3 mt-2 rounded-full bg-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Educator AI Assistant</h3>
                    <p className="text-gray-400">
                      Intelligent assistant for teachers that automates routine tasks and 
                      provides actionable insights on student progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Interested in Respond EDU?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Whether you&apos;re an educator, administrator, or potential partner, visit our website to learn more.
            </p>
            <a href="https://www.respondedu.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Visit Respond EDU
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
