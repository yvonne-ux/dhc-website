import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dynamic Human Capital | People-First Staffing Solutions',
  description:
    'Dynamic Human Capital, an Elitez Group company — connecting people to meaningful work across Singapore and Southeast Asia. Recruitment, staffing, payroll, and HR solutions.',
  keywords:
    'recruitment, staffing, Singapore, HR solutions, Elitez Group, Dynamic Human Capital, DHC, jobs',
  openGraph: {
    title: 'Dynamic Human Capital | People-First Staffing Solutions',
    description:
      'Connecting people to meaningful work across Singapore and Southeast Asia.',
    type: 'website',
    url: 'https://dhc.com.sg',
    images: [
      {
        url: 'https://dhc.com.sg/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dynamic Human Capital',
      },
    },
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${sora.variable} font-inter antialiased bg-white text-slate-800`}
      >
        {children}
      </body>
    </html>
  )
}
