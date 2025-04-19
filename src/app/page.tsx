"use client"

import {Poppins} from "next/font/google"
import {useEffect, useState, useRef, RefObject} from "react"
import {motion} from "framer-motion"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import MyServices from "@/components/MyServices"
import PortfolioSection from "@/components/PortfolioSection"
import ResumeeSection from "@/components/ResumeeSection"
import Testimonial from "@/components/Testimonial"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Miscelleneous from "@/components/Miscelleneous"

// Import our custom animation components
import AnimatedSection from "@/components/AnimatedSection"
import ScrollIndicator from "@/components/ScrollIndicator"
import ParallaxEffect from "@/components/ParallaxEffect"
import RevealList from "@/components/RevealList"

const inter = Poppins({subsets: ["latin"], weight: "400"})

// Interface for section data
interface Section {
  id: string
  label: string
}

export default function Home() {
  // For active navigation tracking
  const [activeSection, setActiveSection] = useState<string>("hero")

  // Define sections for navigation
  const sections: Section[] = [
    {id: "hero", label: "Home"},
    {id: "services", label: "Services"},
    {id: "resume", label: "Resume"},
    {id: "portfolio", label: "Portfolio"},
    {id: "testimonial", label: "Testimonials"},
    {id: "contact", label: "Contact"},
  ]

  // Section refs for intersection observer
  const sectionRefs: Record<string, RefObject<HTMLElement>> = {
    hero: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    resume: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null),
    testimonial: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({behavior: "smooth"})
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-10% 0px -20% 0px",
      threshold: [0.25, 0.5, 0.75],
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const sectionId = entry.target.id
          if (sectionId) {
            setActiveSection(sectionId)
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Add cursor effect (optional)
  const [mousePosition, setMousePosition] = useState<{x: number; y: number}>({x: 0, y: 0})

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({x: e.clientX, y: e.clientY})
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className={`${inter.className} relative overflow-hidden`}>
      {/* Custom cursor (optional) */}
      <motion.div
        className='w-6 h-6 rounded-full bg-indigo-500 bg-opacity-30 fixed pointer-events-none z-50 hidden lg:block'
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: 1,
        }}
        transition={{type: "spring", damping: 10, stiffness: 50}}
      />

      {/* Scroll indicator and side navigation */}
      <ScrollIndicator sections={sections} activeSection={activeSection} onSectionClick={scrollToSection} />

      {/* Header with activeSection passed for highlighting current nav item */}
      <Header />

      {/* Hero section */}
      <AnimatedSection id='hero' className='min-h-screen' animationType='scale' ref={sectionRefs.hero}>
        <ParallaxEffect depth={0.3} direction='up'>
          <HeroSection />
        </ParallaxEffect>
      </AnimatedSection>

      {/* Services section */}
      <AnimatedSection id='services' className='py-20' delay={0.1} ref={sectionRefs.services}>
        <RevealList staggerDelay={0.1} direction='up'>
          <MyServices />
        </RevealList>
      </AnimatedSection>

      {/* Resume section */}
      <AnimatedSection id='resume' className='py-20' animationType='fadeLeft' delay={0.1} ref={sectionRefs.resume}>
        <ResumeeSection />
      </AnimatedSection>

      {/* Portfolio section */}
      <AnimatedSection id='portfolio' className='py-20' delay={0.1} ref={sectionRefs.portfolio}>
        <RevealList staggerDelay={0.15} direction='up'>
          <PortfolioSection />
        </RevealList>
      </AnimatedSection>

      {/* Testimonial section */}
      <AnimatedSection id='testimonial' className='py-20' animationType='fadeRight' delay={0.1} ref={sectionRefs.testimonial}>
        <ParallaxEffect depth={0.1} direction='up'>
          <Testimonial />
        </ParallaxEffect>
      </AnimatedSection>

      {/* Contact section */}
      <AnimatedSection id='contact' className='py-20' animationType='scale' delay={0.1} ref={sectionRefs.contact}>
        <Contact />
      </AnimatedSection>

      {/* Footer doesn't need animation */}
      <Footer />
      <Miscelleneous />
    </div>
  )
}
