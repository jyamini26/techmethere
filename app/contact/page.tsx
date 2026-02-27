export default function Contact() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-8 cyber-gradient">Get in Touch</h1>
        <p className="text-xl text-gray-300 mb-12">Connect with me on social media.</p>
        
        <div className="bg-slate-950 border border-gray-700 p-12 rounded">
          <div className="flex gap-8 justify-center">
            <a href="https://github.com/jyamini26" className="text-lg text-blue-400 hover:text-blue-300 font-semibold">GitHub</a>
            <a href="https://linkedin.com/in/justinyamini" className="text-lg text-blue-400 hover:text-blue-300 font-semibold">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}
