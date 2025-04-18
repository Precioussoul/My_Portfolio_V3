import React from "react"
import {FaLaptopCode, FaServer, FaLayerGroup, FaMobileAlt, FaDatabase, FaPalette} from "react-icons/fa"

export type StackArea = "Frontend" | "Backend" | "Full-stack" | "Mobile" | "Database" | "UI/UX"

export type StackStatusProps = {
  stack: StackArea
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "pill" | "tag" | "chip"
}

const StackStatus = ({stack, className = "", size = "md", variant = "chip"}: StackStatusProps) => {
  const stackConfig = {
    "Frontend": {
      icon: FaLaptopCode,
      bgColor: "bg-indigo-600",
      textColor: "text-white",
    },
    "Backend": {
      icon: FaServer,
      bgColor: "bg-teal-600",
      textColor: "text-white",
    },
    "Full-stack": {
      icon: FaLayerGroup,
      bgColor: "bg-violet-600",
      textColor: "text-white",
    },
    "Mobile": {
      icon: FaMobileAlt,
      bgColor: "bg-emerald-600",
      textColor: "text-white",
    },
    "Database": {
      icon: FaDatabase,
      bgColor: "bg-emerald-600",
      textColor: "text-white",
    },
    "UI/UX": {
      icon: FaPalette,
      bgColor: "bg-fuchsia-500",
      textColor: "text-white",
    },
  }

  // Size classes
  const sizeClasses = {
    sm: "text-xs py-1 px-2",
    md: "text-sm py-1.5 px-3",
    lg: "text-base py-2 px-4",
  }

  // Variant styles
  const variantClasses = {
    pill: "rounded-full",
    tag: "rounded-md",
    chip: "rounded-full border border-transparent",
  }

  const currentStack = stackConfig[stack]
  const IconComponent = currentStack.icon

  return (
    <div
      className={`inline-flex items-center gap-1.5 font-medium
        ${currentStack.bgColor} ${currentStack.textColor}
        ${variantClasses[variant]} ${sizeClasses[size]}
        hover:opacity-90 transform hover:scale-105 transition-all duration-300`}
      style={{boxShadow: "0 2px 4px rgba(0,0,0,0.1)"}}
    >
      <IconComponent size={12} />
      <span>{stack}</span>
    </div>
  )
}

export default StackStatus
