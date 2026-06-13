import type { Metadata } from "next"
import { Geist_Mono, Doto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
  display: "swap",
  weight: ["400", "700", "900"],
})

const SITE_URL = "https://ahnafz.dev"
const TITLE = "ahnaf zareef"
const DESCRIPTION =
  "Ahnaf Zareef — Computer Engineering student at McMaster University, based in Toronto, Ontario. Selected projects, experiments, and systems built with care."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "az",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
}

export const viewport = {
  themeColor: "#141414",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${geistMono.variable} ${doto.variable}`}>
      <body className="font-mono antialiased selection:bg-accent selection:text-accent-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
