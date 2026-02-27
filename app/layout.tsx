import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Justin Yamini | Infrastructure, Automation & AI',
  description: 'Founder & CEO of Syzen.ai, Respond EDU, TechMe There',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-gray-100">
        <nav className="fixed top-0 w-full bg-slate-950 border-b border-gray-800 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold cyber-gradient">TechMe There</a>
            <ul className="flex gap-8 text-sm md:flex hidden">
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
              <li><a href="/portfolio" className="hover:text-blue-400">Portfolio</a></li>
              <li><a href="/respond-edu" className="hover:text-blue-400">Respond EDU</a></li>
              <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
        <footer className="bg-slate-950 border-t border-gray-800 mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Justin Yamini. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
