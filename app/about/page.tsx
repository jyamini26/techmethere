export default function About() {
  const expertise = [
    'Datacenter design, GPU compute clusters, infrastructure modernization',
    'Infrastructure-as-Code: Terraform, Ansible, Python automation',
    'Machine Learning infrastructure: H100, H200, B200 cluster design and optimization',
    'Enterprise automation: n8n, Make, custom API integration',
    'Network architecture: VLANs, BGP, firewall policy, SDN overlay networks',
    'Storage systems: ZFS, Ceph, NVMe-oF, SAN/NAS architectures'
  ]

  return (
    <div className="min-h-screen py-32 md:py-48">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-5xl sm:text-6xl font-bold mb-8 cyber-gradient">About Justin</h1>
        
        <div className="space-y-12">
          {/* Intro */}
          <div className="card p-8 md:p-10">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              Infrastructure technologist, automation architect, and AI systems specialist with 15+ years of experience designing, deploying, and optimizing technology solutions for enterprise and scale-up organizations.
            </p>
          </div>

          {/* Background */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Background</h2>
            <p className="text-gray-300 leading-relaxed">
              Founder & CEO of Syzen.ai, leading an AI automation consultancy that implements end-to-end digital transformation for enterprises. Prior to Syzen.ai, founded TechMe There, a technology integration firm specializing in custom infrastructure builds and datacenter operations.
            </p>
          </section>

          {/* Core Expertise */}
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Core Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="card p-6 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2"></div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                <span className="font-semibold text-cyan-400">UCLA</span> — Bachelor of Arts in Philosophy with coursework in Computer Science and Artificial Intelligence
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
