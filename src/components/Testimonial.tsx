"use client"
import React, {useContext, useEffect} from "react"
import TestimonialItem from "./TestimonialItem"
import {ContentContext} from "@/contexts/ScrollContext"
import {testimonialData} from "@/data/testimonial"

const Testimonial = () => {
  const {testimonialRef} = useContext(ContentContext)

  useEffect(() => {
    function autoScrollHorizontal() {
      const container = document.getElementById("testimonial-container")!!
      let scrollSpeed = 1 // Default scroll speed
      let autoScroll: any

      function startAutoScroll() {
        autoScroll = setInterval(() => {
          container.scrollLeft += scrollSpeed // Move the scroll horizontally
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0 // Reset to the beginning when reaching the end
          }
        }, 20) // The higher this value, the slower the scroll
      }

      function stopAutoScroll() {
        clearInterval(autoScroll)
      }

      container.addEventListener("mouseenter", () => {
        scrollSpeed = 0.2 // Slow down scrolling on hover
      })

      container.addEventListener("mouseleave", () => {
        scrollSpeed = 1 // Resume normal scrolling speed on mouse leave
      })

      // Start the auto scroll on page load
      startAutoScroll()
    }

    autoScrollHorizontal()
  }, [])

  return (
    <section className='testimonial__section' id='Testimonial' ref={testimonialRef}>
      <div className='container testimonial__container'>
        <div className='testimonial__header'>
          <p className='testimonial__header-subtitle'>Hear from those that I have worked with</p>
          <h3 className='testimonial__header-title'>Testimonials</h3>
        </div>
        <div id='testimonial-container' className='flex items-center gap-20 overflow-x-scroll'>
          {testimonialData.map((testimonial, idx) => (
            <TestimonialItem key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
