"use client"

import {useInView} from "framer-motion"
import {useRef, RefObject} from "react"
import {Variants} from "framer-motion"

// Types for animation variants
interface AnimationVariants {
  sectionVariants: Variants
  containerVariants: Variants
  itemVariants: Variants
  cardHoverVariants: Variants
  fadeInLeftVariants: Variants
  fadeInRightVariants: Variants
  scaleUpVariants: Variants
}

// Return type for the useAnimateInView hook
interface AnimateInViewReturn {
  ref: RefObject<HTMLElement>
  inViewProps: {
    ref: RefObject<HTMLElement>
    initial: string
    animate: string
    variants: Variants
  }
}

// Custom hook for section animations
export const useAnimations = (): AnimationVariants & {
  useAnimateInView: (once?: boolean, amount?: number) => AnimateInViewReturn
} => {
  // Animation variants for sections
  const sectionVariants: Variants = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  // Animation variants for staggered children
  const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  // Animation for individual items
  const itemVariants: Variants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Animation for card hover effects
  const cardHoverVariants: Variants = {
    rest: {
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: {duration: 0.2, ease: "easeOut"},
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {duration: 0.2, ease: "easeOut"},
    },
  }

  // Fade-in from left animation
  const fadeInLeftVariants: Variants = {
    hidden: {opacity: 0, x: -50},
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // Fade-in from right animation
  const fadeInRightVariants: Variants = {
    hidden: {opacity: 0, x: 50},
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // Scale-up animation
  const scaleUpVariants: Variants = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // Spring-like bounce
      },
    },
  }

  // Hook for tracking if element is in view
  const useAnimateInView = (once = true, amount = 0.3): AnimateInViewReturn => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {once, amount})

    return {
      ref,
      inViewProps: {
        ref,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: sectionVariants,
      },
    }
  }

  return {
    // Animation variants
    sectionVariants,
    containerVariants,
    itemVariants,
    cardHoverVariants,
    fadeInLeftVariants,
    fadeInRightVariants,
    scaleUpVariants,

    // Helper hooks
    useAnimateInView,
  }
}

export default useAnimations
