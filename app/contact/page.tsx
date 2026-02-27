'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 cyber-gradient text-center">Get in Touch</h1>
        <p className="text-xl text-gray-300 mb-12 text-center">Let's discuss how I can help transform your operations.</p>
        
        <form onSubmit={handleSubmit} className="bg-slate-950 border border-gray-700 p-8 rounded">
          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Name</label>
            <input type="text" required className="w-full bg-slate-900 border border-gray-700 text-white p-3 rounded focus:border-blue-400 outline-none" placeholder="Your name" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Email</label>
            <input type="email" required className="w-full bg-slate-900 border border-gray-700 text-white p-3 rounded focus:border-blue-400 outline-none" placeholder="your@email.com" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Company</label>
            <input type="text" className="w-full bg-slate-900 border border-gray-700 text-white p-3 rounded focus:border-blue-400 outline-none" placeholder="Your company" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">Message</label>
            <textarea required rows={6} className="w-full bg-slate-900 border border-gray-700 text-white p-3 rounded focus:border-blue-400 outline-none" placeholder="Tell me about your project..." />
          </div>

          <button type="submit" className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded transition">
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-center text-green-400 font-semibold">✓ Message sent! I'll get back to you soon.</p>
          )}
        </form>
      </div>
    </div>
  )
}
