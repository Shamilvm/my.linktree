import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shamil Vm',
  description: 'Shamil Vm — Full-Stack Developer | turning ideas into powerful web applications. Explore my projects, skills, and experience in building modern, scalable solutions.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

