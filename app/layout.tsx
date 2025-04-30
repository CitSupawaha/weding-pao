import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans_Thai } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-thai",
})

export const metadata: Metadata = {
  title: "Sarah & Michael - Wedding Celebration",
  description: "Join us to celebrate the wedding of Sarah and Michael on August 12, 2025 in Seattle, Washington.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSansThai.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
