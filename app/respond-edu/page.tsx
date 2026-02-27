export default function RespondEDU() {
  const features = [
    'AI-Powered LMS with real-time student adaptation',
    'Actionable analytics for teachers delivering metadata insights',
    'Streamlined administrative automation',
    'Modern, intuitive interface (radically simpler than PowerSchool, GoGuardian)',
    'Rapid onboarding (days vs. months)'
  ]

  return (
    <div className="min-h-screen py-32 md:py-48">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 cyber-gradient">Respond EDU</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            AI-powered education platform leveraging advanced AI to streamline school administration and transform how educators interact with learning data.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Platform Features */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Platform Features</h2>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="card p-6 flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                      ✓
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Global Expansion */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Global Expansion</h2>
            <div className="card p-8 md:p-10">
              <p className="text-gray-300 leading-relaxed text-lg">
                White-label partnerships expanding across <span className="text-cyan-400 font-semibold">Switzerland, Dubai, Mexico, Netherlands, and Norway</span>. Positioned as international platform with full localization and regulatory compliance across jurisdictions.
              </p>
            </div>
          </section>

          {/* Future Roadmap */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Future Roadmap</h2>
            <div className="card p-8 md:p-10">
              <p className="text-gray-300 leading-relaxed text-lg">
                Integrating neuroscience and developmental psychology research to personalize learning experiences from an earlier age, positioning Respond EDU as the next generation of education technology.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-slate-700/50 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Ready to transform education?
            </h3>
            <a href="/contact" className="btn-primary inline-block">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
