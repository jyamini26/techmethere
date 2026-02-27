export default function Portfolio() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 cyber-gradient">Portfolio & Case Studies</h1>
        
        <div className="space-y-8">
          <div className="bg-slate-950 border border-gray-700 p-8 rounded">
            <p className="text-blue-400 font-semibold uppercase text-sm">SIMZ</p>
            <h3 className="text-2xl font-bold mt-2 mb-4 text-white">Intelligent Automation for Operations</h3>
            <p className="text-gray-300 mb-4"><strong>Challenge:</strong> Manual data processing workflows with high error rates and slow handoffs.</p>
            <p className="text-gray-300 mb-4"><strong>Solution:</strong> Designed automation workflows using n8n and custom APIs integrating CRM, ERP, and analytics systems.</p>
            <p className="text-gray-300"><strong>Results:</strong> 80% reduction in manual data entry, 50% faster workflows, improved data consistency.</p>
          </div>

          <div className="bg-slate-950 border border-gray-700 p-8 rounded">
            <p className="text-blue-400 font-semibold uppercase text-sm">Tokensoft</p>
            <h3 className="text-2xl font-bold mt-2 mb-4 text-white">KYC/AML Compliance Automation</h3>
            <p className="text-gray-300 mb-4"><strong>Challenge:</strong> Manual compliance verification requiring document review and regulatory API integration.</p>
            <p className="text-gray-300 mb-4"><strong>Solution:</strong> Built secure document processing pipeline with automated identity verification and compliance reporting.</p>
            <p className="text-gray-300"><strong>Results:</strong> Automated 95% of verification, reduced time from hours to minutes.</p>
          </div>

          <div className="bg-slate-950 border border-gray-700 p-8 rounded">
            <p className="text-blue-400 font-semibold uppercase text-sm">CompuBlue</p>
            <h3 className="text-2xl font-bold mt-2 mb-4 text-white">IT Infrastructure Modernization</h3>
            <p className="text-gray-300 mb-4"><strong>Challenge:</strong> Legacy infrastructure with manual server management and inconsistent deployments.</p>
            <p className="text-gray-300 mb-4"><strong>Solution:</strong> Implemented Infrastructure-as-Code (Terraform, Ansible) and container orchestration (Docker, Kubernetes).</p>
            <p className="text-gray-300"><strong>Results:</strong> 70% reduction in deployment time, 99.9% uptime achieved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
