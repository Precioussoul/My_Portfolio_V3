"use client"

import {Poppins} from "next/font/google"
import styles from "./page.module.css"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import MyServices from "@/components/MyServices"
import PortfolioSection from "@/components/PortfolioSection"
import ResumeeSection from "@/components/ResumeeSection"
import Testimonial from "@/components/Testimonial"
import BlogSection from "@/components/BlogSection"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Miscelleneous from "@/components/Miscelleneous"

const inter = Poppins({subsets: ["latin"], weight: "400"})

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MyServices />
      <ResumeeSection />
      <PortfolioSection />
      <Testimonial />
      {/* <BlogSection /> */}
      <Contact />
      <Footer />
      <Miscelleneous />
    </>
  )
}
