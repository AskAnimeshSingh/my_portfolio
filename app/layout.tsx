import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Animesh Singh - Full Stack Developer",
  description:
    "Highly motivated and adaptable software developer with experience in full-stack development, API design, and server deployment. Passionate about creating efficient, scalable, and secure web applications.",
  keywords:
    "Animesh Singh, Full Stack Developer, React Developer, Laravel Developer, Web Developer, Software Engineer, JavaScript, TypeScript, PHP, Python",
  authors: [{ name: "Animesh Singh" }],
  creator: "Animesh Singh",
  publisher: "Animesh Singh",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://animeshsingh.dev",
    title: "Animesh Singh - Full Stack Developer",
    description:
      "Highly motivated and adaptable software developer with experience in full-stack development, API design, and server deployment.",
    siteName: "Animesh Singh Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Animesh Singh - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animesh Singh - Full Stack Developer",
    description:
      "Highly motivated and adaptable software developer with experience in full-stack development, API design, and server deployment.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8b5cf6",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
