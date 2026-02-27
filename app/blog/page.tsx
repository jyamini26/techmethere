export default function Blog() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 cyber-gradient">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-slate-950 border border-gray-700 p-8 rounded hover:border-blue-400">
            <p className="text-gray-500 text-sm mb-2">Feb 26, 2026</p>
            <h2 className="text-2xl font-bold mb-4 text-white">Building GPU Clusters for AI Inference</h2>
            <p className="text-gray-300 mb-4">Design patterns for scaling AI compute, H100/H200/B200 architecture, and token-per-watt optimization strategies.</p>
            <a href="#" className="text-blue-400 hover:text-blue-300">Read article →</a>
          </article>

          <article className="bg-slate-950 border border-gray-700 p-8 rounded hover:border-blue-400">
            <p className="text-gray-500 text-sm mb-2">Feb 20, 2026</p>
            <h2 className="text-2xl font-bold mb-4 text-white">Enterprise Automation Patterns</h2>
            <p className="text-gray-300 mb-4">Designing automation frameworks that integrate disparate systems, reduce manual overhead, and scale across enterprises.</p>
            <a href="#" className="text-blue-400 hover:text-blue-300">Read article →</a>
          </article>
        </div>
      </div>
    </div>
  )
}
