export default function Contact() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-8 cyber-gradient">Get in Touch</h1>
        <p className="text-xl text-gray-300 mb-12">Interested in working together? Let&apos;s connect.</p>
        
        <div className="bg-slate-950 border border-gray-700 p-12 rounded">
          <p className="text-lg text-gray-300 mb-6">Reach out directly:</p>
          <a href="mailto:justin@techmethere.com" className="text-3xl font-bold text-blue-400 hover:text-blue-300 break-all">
            justin@techmethere.com
          </a>
          
          <div className="mt-12 pt-12 border-t border-gray-700">
            <p className="text-gray-400 mb-6">Or connect on:</p>
            <div className="flex gap-6 justify-center">
              <a href="https://github.com/jyamini26" className="text-blue-400 hover:text-blue-300">GitHub</a>
              <a href="https://linkedin.com/in/justinyamini" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
