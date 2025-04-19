"use client"

import {motion, useScroll, useSpring} from "framer-motion"
import {useEffect, useState} from "react"

interface Section {
  id: string
  label: string
}

interface ScrollIndicatorProps {
  sections: Section[]
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({sections = [], activeSection = "", onSectionClick}) => {
  const [showToTop, setShowToTop] = useState<boolean>(false)

  // Scroll progress indicator
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Top progress bar */}
      <motion.div className='fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left' style={{scaleX}} />

      {/* Side section indicators */}
      <div className='fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block'>
        <div className='flex flex-col items-center space-y-4'>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className='group flex items-center'
              aria-label={`Navigate to ${section.label} section`}
            >
              <span
                className={`
                w-2 h-2 rounded-full transition-all duration-300 ease-out
                ${activeSection === section.id ? "bg-blue-500 scale-150" : "bg-gray-400 group-hover:bg-blue-400"}
              `}
              />

              <span
                className={`
                pl-3 text-sm transition-all duration-300 ease-out opacity-0 
                group-hover:opacity-100 absolute right-full pr-2
                ${activeSection === section.id ? "text-blue-500" : "text-gray-500"}
              `}
              >
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        className='fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg z-40'
        onClick={scrollToTop}
        initial={{opacity: 0, y: 20}}
        animate={{
          opacity: showToTop ? 1 : 0,
          y: showToTop ? 0 : 20,
          pointerEvents: showToTop ? "auto" : ("none" as "auto" | "none"),
        }}
        transition={{duration: 0.3}}
        aria-label='Scroll to top'
      >
        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
        </svg>
      </motion.button>
    </>
  )
}

export default ScrollIndicator
