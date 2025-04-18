import React from "react"
import {FaPlayCircle, FaPauseCircle, FaCheckCircle, FaCog} from "react-icons/fa"

export type ProjectStatusProps = {
  status: "ongoing" | "in-progress" | "concluded" | "paused"
  className?: string
  size?: "sm" | "md" | "lg"
  pulseAnimation?: boolean
  showLabel?: boolean
}

const ProjectStatus = ({status, className = "", size = "md", pulseAnimation = true, showLabel = true}: ProjectStatusProps) => {
  // Define status configurations with refined colors
  const statusConfig = {
    "ongoing": {
      icon: FaPlayCircle,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      textBgColor: "bg-emerald-600",
      borderColor: "border-emerald-600/30",
      label: "Ongoing",
      description: "Project is actively being developed",
    },
    "in-progress": {
      icon: FaCog,
      color: "text-sky-600",
      bgColor: "bg-sky-100",
      textBgColor: "bg-sky-600",
      borderColor: "border-sky-600/30",
      label: "In Progress",
      description: "Project is under active development",
    },
    "concluded": {
      icon: FaCheckCircle,
      color: "text-violet-700",
      bgColor: "bg-violet-300",
      textBgColor: "bg-violet-600",
      borderColor: "border-violet-600/30",
      label: "Concluded",
      description: "Project has been successfully completed",
    },
    "paused": {
      icon: FaPauseCircle,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      textBgColor: "bg-amber-600",
      borderColor: "border-amber-600/30",
      label: "Paused",
      description: "Project is temporarily on hold",
    },
  }

  // Get current status configuration
  const currentStatus = statusConfig[status]
  const StatusIcon = currentStatus.icon

  // Size classes
  const sizeClasses = {
    sm: {
      container: "text-xs",
      icon: "w-3 h-3",
      dot: "w-1.5 h-1.5",
      padding: "px-2 py-0.5",
    },
    md: {
      container: "text-sm",
      icon: "w-4 h-4",
      dot: "w-2 h-2",
      padding: "px-3 py-1",
    },
    lg: {
      container: "text-base",
      icon: "w-5 h-5",
      dot: "w-2.5 h-2.5",
      padding: "px-4 py-2",
    },
  }

  return (
    <div
      className={`relative inline-flex items-center gap-2 rounded-full 
        ${currentStatus.bgColor} 
        border ${currentStatus.borderColor} 
        ${sizeClasses[size].padding} ${sizeClasses[size].container} 
        font-medium transition-all duration-300 hover:shadow-sm ${className}`}
      style={{boxShadow: "0 1px 2px rgba(0,0,0,0.08)"}}
      title={currentStatus.description}
    >
      {/* Animated dot for active statuses */}
      {(status === "ongoing" || status === "in-progress") && pulseAnimation && (
        <span className='relative flex h-2 w-2'>
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-85 ${currentStatus.textBgColor}`}
            style={{animationDuration: "3s"}}
          ></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${currentStatus.textBgColor}`}></span>
        </span>
      )}

      {/* Status icon */}
      <StatusIcon className={`${currentStatus.color} ${sizeClasses[size].icon}`} />

      {/* Status label */}
      {showLabel && <span className={currentStatus.color}>{currentStatus.label}</span>}
    </div>
  )
}

export default ProjectStatus
