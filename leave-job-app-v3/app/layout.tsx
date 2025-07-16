import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Letter Maker | Leave / Job / Resignation',
  description: 'Create professional PDF applications for leave, job or resignation.',
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}