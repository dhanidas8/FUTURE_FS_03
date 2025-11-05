import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'NIKE — Motion First',
  description: 'AI-powered rebrand prototype — Next.js + Tailwind + Strapi',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-dark text-white antialiased">
        <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center">
                <span className="sr-only">NIKE</span>
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8C10 2 23 0 28 0L20 12C13 11 6 10 0 8Z" fill="#B7FF00"/></svg>
              </div>
              <a className="text-sm font-medium" href="/">NIKE</a>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <a className="text-sm">Men</a>
              <a className="text-sm">Women</a>
              <a className="text-sm">Collections</a>
              <button className="px-4 py-2 rounded-full bg-brand-volt text-black text-sm font-semibold">Shop</button>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-white/5 py-8">
          <div className="max-w-7xl mx-auto px-6 text-sm text-gray-300">© {new Date().getFullYear()} NIKE — Motion First</div>
        </footer>
      </body>
    </html>
  )
}
