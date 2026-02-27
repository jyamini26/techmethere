export default function Portfolio() {
  const caseStudies = [
    {
      company: 'SIMZ',
      title: 'Intelligent Automation for Operations',
      challenge: 'Manual data processing workflows with high error rates and slow handoffs.',
      solution: 'Designed automation workflows using n8n and custom APIs integrating CRM, ERP, and analytics systems.',
      results: '80% reduction in manual data entry, 50% faster workflows, improved data consistency.'
    },
    {
      company: 'Tokensoft',
      title: 'KYC/AML Compliance Automation',
      challenge: 'Manual compliance verification requiring document review and regulatory API integration.',
      solution: 'Built secure document processing pipeline with automated identity verification and compliance reporting.',
      results: 'Automated 95% of verification, reduced time from hours to minutes.'
    },
    {
      company: 'CompuBlue',
      title: 'IT Infrastructure Modernization',
      challenge: 'Legacy infrastructure with manual server management and inconsistent deployments.',
      solution: 'Implemented Infrastructure-as-Code (Terraform, Ansible) and container orchestration (Docker, Kubernetes).',
      results: '70% reduction in deployment time, 99.9% uptime achieved.'
    }
  ]

  return (
    <div className="min-h-screen py-32 md:py-48">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 cyber-gradient">Portfolio & Case Studies</h1>
        <p className="text-xl text-gray-300 mb-16 max-w-3xl">
          Proven results across enterprise automation, infrastructure modernization, and compliance systems.
        </p>
        
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card p-8 md:p-10 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-cyan-400 font-semibold uppercase text-sm tracking-wider">
                  {study.company}
                </span>
                <div className="flex-grow h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white group-hover:text-cyan-300 transition-colors">
                {study.title}
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">Challenge</h4>
                    <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">Solution</h4>
                    <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">Results</h4>
                    <p className="text-gray-300 leading-relaxed">{study.results}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Interested in working together?
          </h2>
          <a href="/contact" className="btn-primary inline-block">
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}
