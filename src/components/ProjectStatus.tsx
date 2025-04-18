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
  // Define status configurations with enhanced colors
  const statusConfig = {
    "ongoing": {
      icon: FaPlayCircle,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500",
      borderColor: "border-emerald-500",
      hoverBg: "hover:bg-emerald-500/30",
      label: "Ongoing",
      description: "Project is actively being developed",
    },
    "in-progress": {
      icon: FaCog,
      color: "text-blue-500",
      bgColor: "!bg-blue-500",
      borderColor: "!border-blue-500",
      hoverBg: "hover:bg-blue-500/30",
      label: "In Progress",
      description: "Project is under active development",
    },
    "concluded": {
      icon: FaCheckCircle,
      color: "!text-purple-500",
      bgColor: "!bg-purple-500",
      borderColor: "border-purple-500",
      hoverBg: "hover:bg-purple-500/30",
      label: "Concluded",
      description: "Project has been successfully completed",
    },
    "paused": {
      icon: FaPauseCircle,
      color: "text-amber-500",
      bgColor: "bg-amber-500",
      borderColor: "border-amber-500",
      hoverBg: "hover:bg-amber-500/30",
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
      className={` bg-gray-200 dark:bg-gray-800 relative inline-flex items-center gap-2 rounded-full border ${currentStatus.borderColor} border-opacity-30 ${currentStatus.hoverBg} ${sizeClasses[size].padding} ${sizeClasses[size].container} font-medium transition-all duration-300 hover:shadow-md ${className}`}
      title={currentStatus.description}
    >
      {/* Animated dot for active statuses */}
      {(status === "ongoing" || status === "in-progress") && pulseAnimation && (
        <span className='absolute flex'>
          <span
            className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${currentStatus.bgColor}`}
            style={{animationDuration: "2s"}}
          ></span>
          <span className={`relative rounded-full ${sizeClasses[size].dot} ${currentStatus.bgColor}`}></span>
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
