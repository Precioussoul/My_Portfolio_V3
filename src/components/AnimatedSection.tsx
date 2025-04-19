"use client"

import React, {ReactNode, forwardRef} from "react"
import {motion} from "framer-motion"
import {useAnimations} from "@/hooks/useAnimation"

type AnimationType = "fadeUp" | "fadeLeft" | "fadeRight" | "scale"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
  once?: boolean
  animationType?: AnimationType
}

// This component wraps sections with animations
const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  (
    {
      children,
      className = "",
      id = "",
      delay = 0,
      once = true,
      animationType = "fadeUp", // fadeUp, fadeLeft, fadeRight, scale
    },
    ref
  ) => {
    const {sectionVariants, fadeInLeftVariants, fadeInRightVariants, scaleUpVariants, useAnimateInView} = useAnimations()

    const {inViewProps} = useAnimateInView(once)

    // Select animation variant based on type
    const getVariant = () => {
      switch (animationType) {
        case "fadeLeft":
          return fadeInLeftVariants
        case "fadeRight":
          return fadeInRightVariants
        case "scale":
          return scaleUpVariants
        case "fadeUp":
        default:
          return sectionVariants
      }
    }

    return (
      <motion.section
        className={className}
        id={id}
        // @ts-ignore
        ref={ref as React.RefObject<HTMLElement>}
        {...inViewProps}
        variants={getVariant()}
        transition={{
          delay: delay,
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.section>
    )
  }
)

AnimatedSection.displayName = "AnimatedSection"

export default AnimatedSection
