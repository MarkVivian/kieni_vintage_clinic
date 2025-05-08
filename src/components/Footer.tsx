"use client"

import type React from "react"

import { colors } from "../utils/colors"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaCreditCard,
} from "react-icons/fa"

export function Footer() {
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
    <footer style={{ backgroundColor: colors.primary, color: "white" }} className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Kieni Vintage Health Clinic</h3>
            <p className="mb-6">Providing exceptional healthcare services with compassion and expertise since 2010.</p>
            <div className="flex space-x-4">
              <SocialButton icon={<FaFacebookF />} />
              <SocialButton icon={<FaTwitter />} />
              <SocialButton icon={<FaInstagram />} />
              <SocialButton icon={<FaLinkedinIn />} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink text="Home" sectionId="home" onClick={scrollToSection} />
              <FooterLink text="About Us" sectionId="about" onClick={scrollToSection} />
              <FooterLink text="Our Departments" sectionId="departments" onClick={scrollToSection} />
              <FooterLink text="Our Doctors" sectionId="doctors" onClick={scrollToSection} />
              <FooterLink text="Contact Us" sectionId="contact" onClick={scrollToSection} />
              <FooterLink text="Privacy Policy" sectionId="#" onClick={() => {}} />
              <FooterLink text="Terms of Service" sectionId="#" onClick={() => {}} />
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <FooterLink text="Cardiology" sectionId="#" onClick={() => {}} />
              <FooterLink text="Neurology" sectionId="#" onClick={() => {}} />
              <FooterLink text="Pediatrics" sectionId="#" onClick={() => {}} />
              <FooterLink text="Orthopedics" sectionId="#" onClick={() => {}} />
              <FooterLink text="Dermatology" sectionId="#" onClick={() => {}} />
              <FooterLink text="Dental Care" sectionId="#" onClick={() => {}} />
              <FooterLink text="Laboratory Services" sectionId="#" onClick={() => {}} />
            </ul>
            <div className="mt-8">
              <h4 className="font-semibold mb-3">We Accept</h4>
              <div className="flex space-x-3">
                <FaCcVisa className="text-xl transition-transform duration-300 hover:scale-110" />
                <FaCcMastercard className="text-xl transition-transform duration-300 hover:scale-110" />
                <FaPaypal className="text-xl transition-transform duration-300 hover:scale-110" />
                <FaCreditCard className="text-xl transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Kieni Vintage Health Clinic. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Designed with care for your health and well-being.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-primary"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      {icon}
    </a>
  )
}

function FooterLink({ text, sectionId, onClick }: { text: string; sectionId: string; onClick: (id: string) => void }) {
  return (
    <li>
      <a
        href={`#${sectionId}`}
        className="transition-all duration-300 hover:pl-2"
        onClick={(e) => {
          e.preventDefault()
          onClick(sectionId)
        }}
      >
        {text}
      </a>
    </li>
  )
}
