import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thusani Vimalenthiran | Software Engineer & AI/ML Researcher',
  description: 'Portfolio of Thusani Vimalenthiran, a Software Engineer and Deep Learning Researcher specializing in full-stack web development, AI/ML, and intelligent systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen relative`}>
        <div className="hologram-bg" />
        {children}
      </body>
    </html>
  )
}

