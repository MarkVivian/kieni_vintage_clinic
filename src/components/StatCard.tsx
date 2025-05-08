"use client"

import { useInView } from "../utils/scroll-observer"
import { colors } from "../utils/colors"
import { useEffect, useState } from "react"
import type React from "react"

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
  index: number
}

export function StatCard({ icon, value, label, index }: StatCardProps) {
  const { ref, isInView } = useInView()
  const [animatedValue, setAnimatedValue] = useState(0)
  const [suffix, setSuffix] = useState("")

  useEffect(() => {
    // Extract the numeric value and suffix from the value prop
    const numericPart = Number.parseInt(value.replace(/\D/g, ""), 10) || 0
    const suffixPart = value.replace(/[0-9]/g, "").trim()
    setSuffix(suffixPart)

    if (!isInView) return

    const duration = 2000 // Animation duration in milliseconds
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const currentValue = Math.floor(progress * numericPart)

      setAnimatedValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-lg shadow-md text-center group hover:shadow-xl transition-all duration-300"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(0.95)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${colors.primaryLight}` }}
      >
        <span className="text-2xl" style={{ color: colors.primary }}>
          {icon}
        </span>
      </div>
      <h3 className="text-4xl font-bold mb-2" style={{ color: colors.text.dark }}>
        {animatedValue}
        {suffix}
      </h3>
      <p style={{ color: colors.text.medium }}>{label}</p>
    </div>
  )
}
