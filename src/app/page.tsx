"use client"

import {Poppins} from "next/font/google"
import {useEffect, useState} from "react"
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
  // To detect if we're on mobile
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Define sections for navigation
  const sections: Section[] = [
    {id: "hero", label: "Home"},
    {id: "services", label: "Services"},
    {id: "resume", label: "Resume"},
    {id: "portfolio", label: "Portfolio"},
    {id: "testimonial", label: "Testimonials"},
    {id: "contact", label: "Contact"},
  ]

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

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on initial load
    checkMobile()

    // Check on resize
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Add cursor effect (only for desktop)
  const [mousePosition, setMousePosition] = useState<{x: number; y: number}>({x: 0, y: 0})

  useEffect(() => {
    // Skip on mobile
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({x: e.clientX, y: e.clientY})
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMobile])

  return (
    <div className={`${inter.className} relative`}>
      {/* Custom cursor (only on desktop) */}
      {!isMobile && (
        <motion.div
          className='w-6 h-6 rounded-full bg-indigo-500 bg-opacity-30 fixed pointer-events-none z-50 hidden lg:block'
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1,
          }}
          transition={{type: "spring", damping: 10, stiffness: 50}}
        />
      )}

      {/* Scroll indicator and side navigation (only on desktop) */}
      {!isMobile && <ScrollIndicator sections={sections} activeSection={activeSection} onSectionClick={scrollToSection} />}

      {/* Header */}
      <Header />

      {/* Hero section */}
      <section id='hero' className='min-h-screen'>
        {isMobile ? (
          // Simpler version for mobile
          <HeroSection />
        ) : (
          // Animated version for desktop
          <AnimatedSection id='hero-animated' className='h-full' animationType='scale'>
            <ParallaxEffect depth={0.3} direction='up'>
              <HeroSection />
            </ParallaxEffect>
          </AnimatedSection>
        )}
      </section>

      {/* Portfolio section */}
      <section id='portfolio' className=''>
        {isMobile ? (
          // Simpler version for mobile
          <PortfolioSection />
        ) : (
          // Animated version for desktop
          <AnimatedSection id='portfolio-animated' className='h-full' delay={0.1}>
            <RevealList staggerDelay={0.15} direction='up'>
              <PortfolioSection />
            </RevealList>
          </AnimatedSection>
        )}
      </section>

      {/* Resume section */}
      <section id='resume' className='mt-10'>
        {isMobile ? (
          // Simpler version for mobile
          <ResumeeSection />
        ) : (
          // Animated version for desktop
          <AnimatedSection id='resume-animated' className='h-full' animationType='fadeLeft' delay={0.1}>
            <ResumeeSection />
          </AnimatedSection>
        )}
      </section>

      {/* Services section */}
      <section id='services' className=''>
        {isMobile ? (
          // Simpler version for mobile
          <MyServices />
        ) : (
          // Animated version for desktop
          <AnimatedSection id='services-animated' className='h-full' delay={0.1}>
            <RevealList staggerDelay={0.1} direction='up'>
              <MyServices />
            </RevealList>
          </AnimatedSection>
        )}
      </section>

      {/* Testimonial section */}
      <section id='testimonial' className=''>
        {isMobile ? (
          // Simpler version for mobile
          <Testimonial />
        ) : (
          // Animated version for desktop
          <AnimatedSection id='testimonial-animated' className='h-full' animationType='fadeRight' delay={0.1}>
            <ParallaxEffect depth={0.1} direction='up'>
              <Testimonial />
            </ParallaxEffect>
          </AnimatedSection>
        )}
      </section>

      {/* Contact section */}
      <section id='contact' className=''>
        {isMobile ? (
          // Simpler version for mobile
          <Contact />
        ) : (
          // Animated version for desktop
          <AnimatedSection id='contact-animated' className='h-full' animationType='scale' delay={0.1}>
            <Contact />
          </AnimatedSection>
        )}
      </section>

      {/* Footer doesn't need animation */}
      <Footer />
      <Miscelleneous />
    </div>
  )
}
