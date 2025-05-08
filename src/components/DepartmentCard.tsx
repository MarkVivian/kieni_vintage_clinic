import { useInView } from "../utils/scroll-observer"
import { colors } from "../utils/colors"
import type React from "react"

interface DepartmentCardProps {
  title: string
  icon: React.ReactNode
  description: string
  index: number
}

export function DepartmentCard({ title, icon, description, index }: DepartmentCardProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className="bg-white rounded p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${colors.primaryLight}` }}
      >
        <span className="text-2xl" style={{ color: colors.primary }}>
          {icon}
        </span>
      </div>
      <h3
        className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary"
        style={{ color: colors.text.dark }}
      >
        {title}
      </h3>
      <p style={{ color: colors.text.medium }}>{description}</p>
    </div>
  )
}
