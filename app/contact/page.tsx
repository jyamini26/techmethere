export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/jyamini26',
      description: 'Check out my open source projects and contributions'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/justinyamini',
      description: 'Connect professionally and stay updated'
    }
  ]

  return (
    <div className="min-h-screen py-32 md:py-48">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 cyber-gradient">Get in Touch</h1>
        <p className="text-xl text-gray-300 mb-16 leading-relaxed">
          Let&apos;s connect and discuss how I can help transform your infrastructure and automation challenges.
        </p>
        
        <div className="space-y-4 mb-16">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-8 md:p-10 group flex flex-col items-center justify-center hover:shadow-glow-blue"
            >
              <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-2">
                {link.name}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="card p-8 md:p-10">
          <h3 className="text-xl font-bold text-white mb-4">Other Ways to Connect</h3>
          <p className="text-gray-300 leading-relaxed">
            Interested in consulting, partnerships, or exploring new opportunities? Feel free to reach out through any of the channels above.
          </p>
        </div>
      </div>
    </div>
  )
}
