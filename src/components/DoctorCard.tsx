"use client"

import type React from "react"
import { useInView } from "../utils/scroll-observer"
import { colors } from "../utils/colors"
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import { useTheme } from "../components/theme-context"

interface DoctorCardProps {
  name: string
  role: string
  bio: string
  image: string
  index: number
}

export function DoctorCard({ name, role, bio, image, index }: DoctorCardProps) {
  const { ref, isInView } = useInView()
  const { themeColors } = useTheme()

  return (
    <div
      ref={ref}
      className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="overflow-hidden h-80 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.primaryLight} 100%)`,
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3
          className="text-xl font-semibold mb-1 transition-colors duration-300 group-hover:text-primary"
          style={{ color: colors.text.dark }}
        >
          {name}
        </h3>
        <p className="mb-4" style={{ color: colors.primary }}>
          {role}
        </p>
        <p className="mb-4" style={{ color: colors.text.medium }}>
          {bio}
        </p>
        <div className="flex space-x-3">
          <SocialButton icon={<FaLinkedin />} />
          <SocialButton icon={<FaTwitter />} />
          <SocialButton icon={<FaEnvelope />} />
        </div>
      </div>
    </div>
  )
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: colors.primaryLight,
        color: colors.primary,
      }}
    >
      {icon}
    </a>
  )
}
