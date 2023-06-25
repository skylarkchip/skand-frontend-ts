import React, { PropsWithChildren } from "react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

type LayoutProps = {
  children?: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <main
      className={`${inter.variable} font-primary bg-custom-light-pink min-h-screen py-8 px-4 md:p-8`}
    >
      {children}
    </main>
  )
}

export default Layout
