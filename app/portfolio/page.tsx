export default function Portfolio() {
  const caseStudies = [
    {
      company: "SIMZ",
      title: "Intelligent Automation for Operations",
      challenge: "Manual data processing workflows with high error rates and slow handoffs between teams.",
      solution: "Designed automation workflows using n8n and custom APIs integrating CRM, ERP, and analytics systems. Built intelligent routing and validation layers.",
      results: [
        { metric: "80%", label: "Reduction in manual data entry" },
        { metric: "50%", label: "Faster workflow completion" },
        { metric: "99%", label: "Data consistency rate" }
      ],
      tags: ["n8n", "API Integration", "Process Automation"],
      color: "cyan"
    },
    {
      company: "Tokensoft",
      title: "KYC/AML Compliance Automation",
      challenge: "Manual compliance verification requiring document review and regulatory API integration, creating bottlenecks in onboarding.",
      solution: "Built secure document processing pipeline with automated identity verification, risk scoring, and compliance reporting dashboards.",
      results: [
        { metric: "95%", label: "Verification automated" },
        { metric: "Minutes", label: "vs. hours processing time" },
        { metric: "100%", label: "Audit compliance" }
      ],
      tags: ["KYC/AML", "Document Processing", "Security"],
      color: "purple"
    },
    {
      company: "CompuBlue",
      title: "IT Infrastructure Modernization",
      challenge: "Legacy infrastructure with manual server management and inconsistent deployments causing reliability issues.",
      solution: "Implemented Infrastructure-as-Code (Terraform, Ansible) and container orchestration (Docker, Kubernetes) with full CI/CD pipelines.",
      results: [
        { metric: "70%", label: "Faster deployments" },
        { metric: "99.9%", label: "Uptime achieved" },
        { metric: "40%", label: "Cost reduction" }
      ],
      tags: ["Terraform", "Kubernetes", "IaC"],
      color: "emerald"
    }
  ]

  const colorClasses = {
    cyan: {
      badge: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
      gradient: "from-accent-cyan to-blue-500",
      border: "group-hover:border-accent-cyan/30"
    },
    purple: {
      badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      gradient: "from-purple-500 to-pink-500",
      border: "group-hover:border-purple-400/30"
    },
    emerald: {
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      gradient: "from-emerald-500 to-teal-500",
      border: "group-hover:border-emerald-400/30"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="mb-8">
              <span className="badge">Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              <span className="cyber-gradient">Case Studies & Results</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Real-world examples of infrastructure modernization, automation, and AI-driven 
              transformation delivering measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            {caseStudies.map((study, index) => {
              const colors = colorClasses[study.color as keyof typeof colorClasses]
              return (
                <article 
                  key={index}
                  className={`group relative bg-dark-800/60 border border-dark-600/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow ${colors.border}`}
                >
                  {/* Top accent */}
                  <div className={`h-1 bg-gradient-to-r ${colors.gradient}`} />
                  
                  <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${colors.badge}`}>
                        {study.company}
                      </span>
                      {study.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs text-gray-500 bg-dark-700/50 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {study.title}
                    </h2>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Challenge
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Solution
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="pt-6 border-t border-dark-600/50">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        Results
                      </h3>
                      <div className="grid grid-cols-3 gap-4 md:gap-8">
                        {study.results.map((result, i) => (
                          <div key={i} className="text-center md:text-left">
                            <div className="text-2xl md:text-3xl font-bold cyber-gradient mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-dark-600/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a similar challenge?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how we can help modernize your infrastructure and automate your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
