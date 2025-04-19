"use client"

import React, {useRef, ReactNode} from "react"
import {motion, useInView, Variants} from "motion/react"

type RevealDirection = "up" | "down" | "left" | "right"

interface RevealListProps {
  children: ReactNode
  className?: string
  itemClassName?: string
  delay?: number
  staggerDelay?: number
  direction?: RevealDirection
  once?: boolean
}

// This component animates list items with a staggered reveal effect
const RevealList: React.FC<RevealListProps> = ({
  children,
  className = "",
  itemClassName = "",
  delay = 0.2,
  staggerDelay = 0.1,
  direction = "up",
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once,
    amount: 0.2,
  })

  // Set direction of animation
  const getDirectionVariants = (): Variants => {
    switch (direction) {
      case "up":
        return {
          hidden: {opacity: 0, y: 30},
          visible: {opacity: 1, y: 0},
        }
      case "down":
        return {
          hidden: {opacity: 0, y: -30},
          visible: {opacity: 1, y: 0},
        }
      case "left":
        return {
          hidden: {opacity: 0, x: 30},
          visible: {opacity: 1, x: 0},
        }
      case "right":
        return {
          hidden: {opacity: 0, x: -30},
          visible: {opacity: 1, x: 0},
        }
      default:
        return {
          hidden: {opacity: 0, y: 30},
          visible: {opacity: 1, y: 0},
        }
    }
  }

  // Container and item variants
  const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = getDirectionVariants()

  // Map children to motion elements if they exist
  const childrenArray = children ? (Array.isArray(children) ? children : [children]) : []

  return (
    <motion.div ref={ref} className={className} initial='hidden' animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          className={itemClassName}
          variants={itemVariants}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0], // Smooth easing
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default RevealList
