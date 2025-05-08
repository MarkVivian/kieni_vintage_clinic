"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { colors } from "../utils/colors"
import { FaHome, FaInfoCircle, FaHospital, FaUserMd, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
      closeMobileMenu()
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-white shadow-md" : "py-4 bg-white/95"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-['Pacifico'] transition-transform hover:scale-105"
          style={{ color: colors.primary }}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("home")
          }}
        >
          Kieni Vintage Health Clinic
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavItem icon={<FaHome />} label="Home" sectionId="home" onClick={scrollToSection} />
          <NavItem icon={<FaInfoCircle />} label="About" sectionId="about" onClick={scrollToSection} />
          <NavItem icon={<FaHospital />} label="Departments" sectionId="departments" onClick={scrollToSection} />
          <NavItem icon={<FaUserMd />} label="Doctors" sectionId="doctors" onClick={scrollToSection} />
          <NavItem icon={<FaPhoneAlt />} label="Contact Us" sectionId="contact" onClick={scrollToSection} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <FaTimes size={24} style={{ color: colors.primary }} />
          ) : (
            <FaBars size={24} style={{ color: colors.text.dark }} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavItem icon={<FaHome />} label="Home" sectionId="home" onClick={scrollToSection} />
          <MobileNavItem icon={<FaInfoCircle />} label="About" sectionId="about" onClick={scrollToSection} />
          <MobileNavItem icon={<FaHospital />} label="Departments" sectionId="departments" onClick={scrollToSection} />
          <MobileNavItem icon={<FaUserMd />} label="Doctors" sectionId="doctors" onClick={scrollToSection} />
          <MobileNavItem icon={<FaPhoneAlt />} label="Contact Us" sectionId="contact" onClick={scrollToSection} />
        </div>
      </div>
    </header>
  )
}

// Desktop Navigation Item
function NavItem({
  icon,
  label,
  sectionId,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  sectionId: string
  onClick: (id: string) => void
}) {
  return (
    <a
      href={`#${sectionId}`}
      className="font-medium flex items-center gap-2 transition-all hover:text-primary hover:scale-105"
      style={{ color: colors.text.dark }}
      onClick={(e) => {
        e.preventDefault()
        onClick(sectionId)
      }}
    >
      <span className="text-primary">{icon}</span>
      {label}
    </a>
  )
}

// Mobile Navigation Item
function MobileNavItem({
  icon,
  label,
  sectionId,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  sectionId: string
  onClick: (id: string) => void
}) {
  return (
    <a
      href={`#${sectionId}`}
      className="font-medium flex items-center gap-3 p-2 rounded-md transition-all hover:bg-gray-100"
      style={{ color: colors.text.dark }}
      onClick={(e) => {
        e.preventDefault()
        onClick(sectionId)
      }}
    >
      <span className="text-primary text-xl">{icon}</span>
      {label}
    </a>
  )
}
