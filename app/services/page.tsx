export default function Services() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 cyber-gradient">Syzen.ai Services</h1>
        <p className="text-xl text-gray-300 mb-12">Enterprise automation, infrastructure modernization, and AI-driven transformation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-950 border border-gray-700 p-8 rounded">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">AI Automation & Workflow Optimization</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Intelligent document processing & data extraction</li>
              <li>✓ Workflow automation: n8n, Make, custom APIs</li>
              <li>✓ ML pipeline deployment & model serving</li>
              <li>✓ Process mining & bottleneck analysis</li>
              <li>✓ Integration with legacy enterprise systems</li>
            </ul>
          </div>

          <div className="bg-slate-950 border border-gray-700 p-8 rounded">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Infrastructure Modernization</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Datacenter design & GPU compute clusters</li>
              <li>✓ Virtualization: Proxmox, ESXi, KVM</li>
              <li>✓ Infrastructure-as-Code: Terraform, Ansible</li>
              <li>✓ Container orchestration: Docker, Kubernetes</li>
              <li>✓ Monitoring & observability stacks</li>
            </ul>
          </div>

          <div className="bg-slate-950 border border-gray-700 p-8 rounded">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Machine Learning Infrastructure</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ GPU cluster design & optimization</li>
              <li>✓ High-performance inference serving</li>
              <li>✓ Distributed training frameworks</li>
              <li>✓ Model quantization & optimization</li>
              <li>✓ Cost analysis & token-per-watt tuning</li>
            </ul>
          </div>

          <div className="bg-slate-950 border border-gray-700 p-8 rounded">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Compliance & Security</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ KYC/AML workflow automation</li>
              <li>✓ Compliance documentation & audit trails</li>
              <li>✓ Secure, scalable identity verification</li>
              <li>✓ Regulatory API integration</li>
              <li>✓ Data processing pipeline architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
