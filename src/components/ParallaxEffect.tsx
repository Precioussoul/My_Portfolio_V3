"use client"

import React, {useRef, ReactNode, CSSProperties} from "react"
import {motion, useScroll, useTransform} from "framer-motion"

type ParallaxDirection = "up" | "down" | "left" | "right"

interface ParallaxEffectProps {
  children: ReactNode
  depth?: number // Values from 0-1, with higher being more pronounced parallax
  direction?: ParallaxDirection
  className?: string
  style?: CSSProperties
}

// Creates a parallax scrolling effect for the wrapped component
const ParallaxEffect: React.FC<ParallaxEffectProps> = ({children, depth = 0.2, direction = "up", className = "", style = {}}) => {
  const ref = useRef<HTMLDivElement>(null)

  // Get the scroll progress relative to the element
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate movement based on direction and depth
  const getMovementValue = () => {
    // Convert depth to pixel value (higher depth = more movement)
    const pixelMovement = 100 * depth

    switch (direction) {
      case "up":
        return [pixelMovement, -pixelMovement]
      case "down":
        return [-pixelMovement, pixelMovement]
      case "left":
        return [pixelMovement, -pixelMovement]
      case "right":
        return [-pixelMovement, pixelMovement]
      default:
        return [pixelMovement, -pixelMovement]
    }
  }

  // Transform scroll progress to movement
  const transformProperty = direction === "left" || direction === "right" ? "x" : "y"

  const movement = useTransform(scrollYProgress, [0, 1], getMovementValue())

  return (
    <div ref={ref} className={className} style={{overflow: "hidden", ...style} as CSSProperties}>
      <motion.div style={{[transformProperty]: movement}}>{children}</motion.div>
    </div>
  )
}

export default ParallaxEffect
