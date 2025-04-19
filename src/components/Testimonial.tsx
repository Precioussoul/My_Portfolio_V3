"use client"
import React, {useEffect, useRef} from "react"
import TestimonialItem from "./TestimonialItem"
import {testimonialData} from "@/data/testimonial"

const Testimonial: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function autoScrollHorizontal(): void {
      const container = containerRef.current
      if (!container) return

      let scrollSpeed: number = 1 // Default scroll speed
      let autoScroll: NodeJS.Timeout
      let isScrolling: boolean = true

      function startAutoScroll(): void {
        autoScroll = setInterval(() => {
          if (!isScrolling) return

          // Check if we're at or near the end
          if (container && container.scrollLeft >= container.scrollWidth - container.clientWidth - 5) {
            // Smoothly reset to the beginning with a small delay
            isScrolling = false
            setTimeout(() => {
              container.scrollLeft = 0
              isScrolling = true
            }, 500)
          } else {
            container ? (container.scrollLeft += scrollSpeed) : null
          }
        }, 20) // The higher this value, the slower the scroll
      }

      function stopAutoScroll(): void {
        clearInterval(autoScroll)
      }

      const handleMouseEnter = (): void => {
        scrollSpeed = 0.2 // Slow down scrolling on hover
      }

      const handleMouseLeave = (): void => {
        scrollSpeed = 1 // Resume normal scrolling speed on mouse leave
      }

      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)

      // Start the auto scroll on page load
      startAutoScroll()
      function cleanupFunc() {
        stopAutoScroll()
        if (container) {
          container.removeEventListener("mouseenter", handleMouseEnter)
          container.removeEventListener("mouseleave", handleMouseLeave)
        }
      }

      // Cleanup function
      return cleanupFunc()
    }

    autoScrollHorizontal()
  }, [])

  return (
    <section className='testimonial__section mt-24 pt-12' id='testimonial'>
      <div className='container testimonial__container'>
        <div className='testimonial__header'>
          <p className='testimonial__header-subtitle'>Hear from those that I have worked with</p>
          <h3 className='testimonial__header-title'>Testimonials</h3>
        </div>
        <div id='testimonial-container' ref={containerRef} className='flex items-center gap-20 overflow-x-scroll'>
          {testimonialData.map((testimonial, idx) => (
            <TestimonialItem key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
