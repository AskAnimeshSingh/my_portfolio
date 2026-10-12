import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", preload: false })

const description =
  "Animesh Singh — full-stack developer building Laravel & React products: booking engines, multi-role admin systems, payment flows and fast, animated interfaces."

export const metadata: Metadata = {
  title: "Animesh Singh — Full-Stack Developer",
  description,
  keywords: [
    "Animesh Singh",
    "Full Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js",
    "PHP",
    "Portfolio",
  ],
  authors: [{ name: "Animesh Singh" }],
  creator: "Animesh Singh",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://animeshsingh.dev",
    title: "Animesh Singh — Full-Stack Developer",
    description,
    siteName: "Animesh Singh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animesh Singh — Full-Stack Developer",
    description,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
