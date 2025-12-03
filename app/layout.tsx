import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Providers } from "@/components/Providers"
import { Navbar } from "@/components/Navbar"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftBenny - Tienda de Tecnología",
  description: "Encuentra los mejores productos de tecnología al mejor precio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <Providers>
          <div className="min-h-screen bg-background">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
