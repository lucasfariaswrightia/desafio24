import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/global/NavBar"


const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Desafio 24",
  description: "Desafio - Lucas Farias",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
