export default function Services() {
  const services = [
    {
      title: 'AI Automation & Workflow Optimization',
      items: [
        'Intelligent document processing & data extraction',
        'Workflow automation: n8n, Make, custom APIs',
        'ML pipeline deployment & model serving',
        'Process mining & bottleneck analysis',
        'Integration with legacy enterprise systems'
      ]
    },
    {
      title: 'Infrastructure Modernization',
      items: [
        'Datacenter design & GPU compute clusters',
        'Virtualization: Proxmox, ESXi, KVM',
        'Infrastructure-as-Code: Terraform, Ansible',
        'Container orchestration: Docker, Kubernetes',
        'Monitoring & observability stacks'
      ]
    },
    {
      title: 'Machine Learning Infrastructure',
      items: [
        'GPU cluster design & optimization',
        'High-performance inference serving',
        'Distributed training frameworks',
        'Model quantization & optimization',
        'Cost analysis & token-per-watt tuning'
      ]
    },
    {
      title: 'Compliance & Security',
      items: [
        'KYC/AML workflow automation',
        'Compliance documentation & audit trails',
        'Secure, scalable identity verification',
        'Regulatory API integration',
        'Data processing pipeline architecture'
      ]
    }
  ]

  return (
    <div className="min-h-screen py-32 md:py-48">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 cyber-gradient">Syzen.ai Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Enterprise automation, infrastructure modernization, and AI-driven transformation tailored for modern enterprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="card p-8 md:p-10 group">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 group/item">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mt-1 text-xs font-bold text-white group-hover/item:shadow-glow transition-all">
                      ✓
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to modernize your infrastructure?
          </h2>
          <a href="/contact" className="btn-primary inline-block">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  )
}
