import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shamil Vm',
  description: 'Your bio or description',
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

