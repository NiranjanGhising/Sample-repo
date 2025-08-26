import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Your Name — Data Analyst Student",
  description: "Data Analyst Student turning messy data into clear decisions. Open to internships and part-time roles.",
  generator: "v0.dev",
  keywords: ["data analyst", "data science", "python", "sql", "tableau", "power bi"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Data Analyst Student",
    description: "Data Analyst Student turning messy data into clear decisions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
