export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-32 text-center">
        <h1 className="text-6xl font-bold mb-6 cyber-gradient">Infrastructure. Automation. AI.</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Founder & CEO of Syzen.ai. Building the future of enterprise automation and education technology.</p>
        <div className="flex gap-4 justify-center">
          <a href="/services" className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 font-semibold">Explore Services</a>
          <a href="/about" className="px-8 py-3 border border-blue-400 text-blue-400 rounded hover:bg-blue-950 font-semibold">Learn More</a>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center cyber-gradient">Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-gray-700 p-8 rounded hover:border-blue-400">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Syzen.ai</h3>
              <p className="text-gray-300">Enterprise automation consultancy specializing in AI-driven transformation for mid-market and enterprise organizations.</p>
            </div>
            <div className="bg-slate-950 border border-gray-700 p-8 rounded hover:border-blue-400">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Respond EDU</h3>
              <p className="text-gray-300">AI-powered education platform expanding globally with white-label partnerships across Europe and Middle East.</p>
            </div>
            <div className="bg-slate-950 border border-gray-700 p-8 rounded hover:border-blue-400">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">TechMe There</h3>
              <p className="text-gray-300">10+ years of datacenter infrastructure and systems automation expertise serving enterprise clients.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
