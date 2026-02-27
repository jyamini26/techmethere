export default function Services() {
  const services = [
    {
      title: "AI Automation & Workflow Optimization",
      description: "Transform manual processes into intelligent, automated workflows that scale with your business.",
      icon: "⚡",
      color: "cyan",
      features: [
        "Intelligent document processing & data extraction",
        "Workflow automation: n8n, Make, custom APIs",
        "ML pipeline deployment & model serving",
        "Process mining & bottleneck analysis",
        "Integration with legacy enterprise systems"
      ]
    },
    {
      title: "Infrastructure Modernization",
      description: "Build robust, scalable infrastructure that supports modern workloads and cloud-native architectures.",
      icon: "🏗️",
      color: "blue",
      features: [
        "Datacenter design & GPU compute clusters",
        "Virtualization: Proxmox, ESXi, KVM",
        "Infrastructure-as-Code: Terraform, Ansible",
        "Container orchestration: Docker, Kubernetes",
        "Monitoring & observability stacks"
      ]
    },
    {
      title: "Machine Learning Infrastructure",
      description: "Design and optimize ML infrastructure for training and inference at scale.",
      icon: "🧠",
      color: "purple",
      features: [
        "GPU cluster design & optimization",
        "High-performance inference serving",
        "Distributed training frameworks",
        "Model quantization & optimization",
        "Cost analysis & token-per-watt tuning"
      ]
    },
    {
      title: "Compliance & Security",
      description: "Implement secure, compliant automation pipelines for regulated industries.",
      icon: "🔒",
      color: "emerald",
      features: [
        "KYC/AML workflow automation",
        "Compliance documentation & audit trails",
        "Secure, scalable identity verification",
        "Regulatory API integration",
        "Data processing pipeline architecture"
      ]
    }
  ]

  const colorClasses = {
    cyan: {
      border: "group-hover:border-accent-cyan/40",
      bg: "from-accent-cyan to-blue-500",
      text: "text-accent-cyan"
    },
    blue: {
      border: "group-hover:border-blue-400/40",
      bg: "from-blue-500 to-blue-600",
      text: "text-blue-400"
    },
    purple: {
      border: "group-hover:border-purple-400/40",
      bg: "from-purple-500 to-pink-500",
      text: "text-purple-400"
    },
    emerald: {
      border: "group-hover:border-emerald-400/40",
      bg: "from-emerald-500 to-teal-500",
      text: "text-emerald-400"
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
              <span className="badge">Syzen.ai Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              <span className="cyber-gradient">Enterprise AI & Infrastructure</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              End-to-end automation, infrastructure modernization, and AI-driven transformation 
              for organizations ready to scale intelligently.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const colors = colorClasses[service.color as keyof typeof colorClasses]
              return (
                <div 
                  key={index} 
                  className={`group relative bg-dark-800/60 border border-dark-600/50 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${colors.border}`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mt-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`${colors.text} mt-1 flex-shrink-0`}>✓</span>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 border-t border-dark-600/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="cyber-gradient">How We Work</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A systematic approach to understanding your needs and delivering measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your systems, processes, and goals" },
              { step: "02", title: "Architecture", desc: "Design scalable solutions tailored to your needs" },
              { step: "03", title: "Implementation", desc: "Build and deploy with iterative feedback loops" },
              { step: "04", title: "Optimization", desc: "Continuous monitoring and performance tuning" }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="card text-center">
                  <div className="text-4xl font-bold cyber-gradient mb-4">{phase.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-gray-400 text-sm">{phase.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-dark-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card text-center py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to modernize your infrastructure?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Connect on LinkedIn to discuss how Syzen.ai can help transform your operations.
            </p>
            <a href="https://linkedin.com/in/justinyamini" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
