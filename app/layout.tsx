import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import AIChat from '@/components/AIChat'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StudyHub | AI-Powered Academic Intelligence Platform',
  description: 'Access 10,000+ premium study materials with neural semantic search, RAG-powered AI summaries, and an intelligent study assistant. Built with Next.js 14, Prisma ORM, and a Python FastAPI ML microservice.',
  keywords: ['study materials', 'AI learning', 'engineering notes', 'semantic search', 'RAG', 'machine learning'],
  openGraph: {
    title: 'StudyHub — The Intelligence Academic Resource Platform',
    description: 'AI-powered study resources, notes, and interactive learning tools for higher education.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudyHub — AI-Powered Academic Platform',
    description: 'Neural semantic search + RAG-powered summaries for 10,000+ engineering study materials.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased font-inter">
        {children}
        <AIChat />
      </body>
    </html>
  )
}
