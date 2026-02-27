export default function About() {
  const expertise = [
    {
      category: "Infrastructure",
      items: [
        "Datacenter design, GPU compute clusters, infrastructure modernization",
        "Virtualization: Proxmox, ESXi, KVM",
        "Container orchestration: Docker, Kubernetes"
      ],
      icon: "🏗️"
    },
    {
      category: "Automation",
      items: [
        "Infrastructure-as-Code: Terraform, Ansible, Python",
        "Workflow automation: n8n, Make, custom APIs",
        "Enterprise system integration"
      ],
      icon: "⚡"
    },
    {
      category: "Machine Learning",
      items: [
        "H100, H200, B200 cluster design and optimization",
        "High-performance inference serving",
        "Model quantization & token-per-watt tuning"
      ],
      icon: "🧠"
    },
    {
      category: "Networking",
      items: [
        "Network architecture: VLANs, BGP, SDN overlay",
        "Firewall policy and security",
        "Storage: ZFS, Ceph, NVMe-oF, SAN/NAS"
      ],
      icon: "🌐"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="badge">About</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="cyber-gradient">Justin Yamini</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
            Infrastructure technologist, automation architect, and AI systems specialist 
            with 15+ years of experience designing, deploying, and optimizing technology solutions.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-dark-800/80 border border-dark-600/50 rounded-full text-sm text-gray-400">
              CEO @ Syzen.ai
            </span>
            <span className="px-4 py-2 bg-dark-800/80 border border-dark-600/50 rounded-full text-sm text-gray-400">
              Founder @ TechMe There
            </span>
            <span className="px-4 py-2 bg-dark-800/80 border border-dark-600/50 rounded-full text-sm text-gray-400">
              Respond EDU
            </span>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 md:py-24 border-y border-dark-600/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-2">Background</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-blue-500 rounded-full" />
            </div>
            <div className="md:col-span-2 space-y-6 text-gray-400 leading-relaxed">
              <p>
                Founder & CEO of <span className="text-white font-medium">Syzen.ai</span>, leading an AI automation 
                consultancy that implements end-to-end digital transformation for enterprises. Building intelligent 
                systems that reduce manual overhead and unlock operational efficiency at scale.
              </p>
              <p>
                Prior to Syzen.ai, founded <span className="text-white font-medium">TechMe There</span>, a technology 
                integration firm specializing in custom infrastructure builds and datacenter operations. Designed 
                and deployed systems for organizations ranging from startups to Fortune 500 enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="cyber-gradient">Core Expertise</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Deep technical knowledge across the full infrastructure and automation stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((area, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center text-2xl">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{area.category}</h3>
                </div>
                <ul className="space-y-3">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <svg className="w-5 h-5 text-accent-cyan mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 border-t border-dark-600/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-2">Education</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-accent-cyan to-blue-500 rounded-full" />
            </div>
            <div className="md:col-span-2">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">UCLA</h3>
                    <p className="text-gray-400">Bachelor of Arts in Philosophy</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Coursework in Computer Science and Artificial Intelligence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
