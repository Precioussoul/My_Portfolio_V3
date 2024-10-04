"use client"
import "./globals.css"
import Head from "./head"
import {useEffect} from "react"
import {Inter, Kurale} from "next/font/google"

const inter = Inter({
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
})
const kural = Kurale({
  weight: ["400"],
  variable: "--font-kurale",
  subsets: ["latin"],
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  useEffect(() => {
    const Titles = ["Frontend Engineer", "Full-Stack Engineer", "Web3 Enthusiast"]
    let count = 0
    let index = 0
    let currentTitle = ""
    let title = ""

    function TypingText() {
      if (count === Titles.length) {
        count = 0
      }

      currentTitle = Titles[count]
      title = currentTitle.slice(0, ++index)

      document.querySelectorAll(".typing-text").forEach((typing) => (typing.textContent = title))

      if (title.length === currentTitle.length) {
        count++
        index = 0
      }
      setTimeout(TypingText, 150)
    }
    TypingText()
    // AOS.init({
    //   once: true,
    // })
  }, [])

  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body className={`${inter.variable} ${kural.variable}`}>{children}</body>
    </html>
  )
}
