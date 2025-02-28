import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Wall Street Portfolio | Kevin Hu",
  description:
    "Hi! I'm Kevin Hu, a Junior at Cornell studying CS and Finance specializing in SWE, financial analytics, and trading platforms.",
  generator: 'v0.dev'
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



import './globals.css'