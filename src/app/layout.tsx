import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/global/NavBar"
import { SelectedItemsProvider } from "@/contexts/ItemsContext"


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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSans.variable} antialiased`}
      >
        <NavBar />
        <SelectedItemsProvider>
          {children}
        </SelectedItemsProvider>
      </body>
    </html>
  )
}
