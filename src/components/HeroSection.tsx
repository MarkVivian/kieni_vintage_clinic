"use client"

import { useEffect, useState } from "react"
import { colors } from "../utils/colors"
import { FaArrowRight } from "react-icons/fa"
import { useTheme } from "../components/theme-context"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { themeColors } = useTheme()

  useEffect(() => {
    // Add a small delay to make the animation more noticeable
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="pt-24 pb-16 relative overflow-hidden min-h-[90vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to right, ${themeColors.primary} 0%, ${themeColors.primary}99 30%, ${themeColors.primary}40 70%, transparent 100%)`,
        }}
      ></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div
          className="max-w-2xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">WE PROVIDE BEST HEALTHCARE</h1>
          <p className="text-lg mb-8 text-white/90">
            Experience exceptional care at Kieni Vintage Health Clinic. Our team of dedicated professionals delivers
            comprehensive healthcare services with compassion and expertise, ensuring your well-being remains our
            highest priority.
          </p>
          <a
            href="#contact"
            className="px-8 py-3 rounded-button font-medium shadow-md whitespace-nowrap inline-flex items-center gap-2 group transition-all duration-300 hover:shadow-lg bg-white"
            style={{ color: colors.primary }}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contact")
            }}
          >
            Book Appointment
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
