export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/jyamini26",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      description: "View my open source projects and code"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/justinyamini",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      description: "Connect professionally"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="badge">Contact</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="cyber-gradient">Get in Touch</span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Interested in working together? Let&apos;s connect and discuss how I can help 
            with your infrastructure, automation, or AI challenges.
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 bg-dark-800/60 border border-dark-600/50 rounded-xl transition-all duration-300 hover:border-accent-cyan/30 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="w-14 h-14 rounded-xl bg-dark-700/50 border border-dark-600/50 flex items-center justify-center text-gray-400 group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-colors">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {link.description}
                  </p>
                </div>
                <svg 
                  className="w-5 h-5 text-gray-600 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What I Work On */}
      <section className="py-16 md:py-24 border-t border-dark-600/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What I Can Help With
            </h2>
            <p className="text-gray-400">
              Areas where I have deep expertise and can provide value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Enterprise Automation",
                items: ["Workflow design & optimization", "System integration", "Process automation"]
              },
              {
                title: "Infrastructure",
                items: ["Datacenter design", "GPU clusters", "Cloud architecture"]
              },
              {
                title: "AI/ML Systems",
                items: ["ML infrastructure", "Inference optimization", "Model deployment"]
              },
              {
                title: "Advisory",
                items: ["Technical strategy", "Team building", "Due diligence"]
              }
            ].map((area, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold text-white mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-dark-800/60 border border-dark-600/50 rounded-xl">
            <span className="text-2xl">📍</span>
            <div className="text-left">
              <p className="text-white font-medium">Based in Los Angeles</p>
              <p className="text-gray-500 text-sm">Working with clients globally</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
