export default function About() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 cyber-gradient">About Justin</h1>
        <div className="text-gray-300 space-y-6">
          <p className="text-lg">Infrastructure technologist, automation architect, and AI systems specialist with 15+ years of experience designing, deploying, and optimizing technology solutions.</p>
          
          <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Background</h2>
          <p>Founder & CEO of Syzen.ai, leading an AI automation consultancy that implements end-to-end digital transformation for enterprises. Prior to Syzen.ai, founded TechMe There, a technology integration firm specializing in custom infrastructure builds and datacenter operations.</p>
          
          <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Core Expertise</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Datacenter design, GPU compute clusters, infrastructure modernization</li>
            <li>Infrastructure-as-Code: Terraform, Ansible, Python automation</li>
            <li>Machine Learning infrastructure: H100, H200, B200 cluster design and optimization</li>
            <li>Enterprise automation: n8n, Make, custom API integration</li>
            <li>Network architecture: VLANs, BGP, firewall policy, SDN overlay networks</li>
            <li>Storage systems: ZFS, Ceph, NVMe-oF, SAN/NAS architectures</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Education</h2>
          <p>UCLA - Bachelor of Arts in Philosophy with coursework in Computer Science and Artificial Intelligence</p>
        </div>
      </div>
    </div>
  )
}
