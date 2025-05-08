"use client"

import { useInView } from "../utils/scroll-observer"
import { colors } from "../utils/colors"
import { FaArrowRight } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { BsHospital } from "react-icons/bs"
import { HiUsers } from "react-icons/hi"

export function AboutSection() {
  const { ref: imageRef, isInView: imageVisible } = useInView()
  const { ref: textRef, isInView: textVisible } = useInView()

  const features = [
    {
      icon: <FaUserDoctor />,
      text: "Patient-Centered Care",
    },
    {
      icon: <BsHospital />,
      text: "Modern Facilities",
    },
    {
      icon: <HiUsers />,
      text: "Expert Medical Team",
    },
  ]

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div
            ref={imageRef}
            className="md:w-1/2 overflow-hidden rounded-lg shadow-lg"
            style={{
              opacity: imageVisible ? 1 : 0,
              transform: imageVisible ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <img
              src="https://readdy.ai/api/search-image?query=A%20warm%20and%20inviting%20medical%20clinic%20interior%20with%20a%20female%20doctor%20in%20a%20white%20coat%20smiling%20confidently%20with%20arms%20crossed.%20The%20background%20shows%20a%20modern%20medical%20office%20with%20bookshelves%2C%20plants%2C%20and%20natural%20lighting.%20The%20image%20conveys%20professionalism%2C%20care%2C%20and%20a%20welcoming%20atmosphere.%20The%20color%20palette%20should%20include%20soft%20blues%20and%20whites%20to%20match%20the%20website%20theme.&width=800&height=600&seq=2&orientation=landscape"
              alt="About Kieni Vintage Health Clinic"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div
            ref={textRef}
            className="md:w-1/2"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">ABOUT US</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Kieni Vintage Health Clinic has been dedicated to providing exceptional healthcare
              services to our community. Our state-of-the-art facility combines advanced medical technology with a
              compassionate, patient-centered approach.
            </p>
            <p className="text-gray-600 mb-8">
              We believe in treating the whole person, not just the symptoms. Our integrated care model ensures that
              every aspect of your health is addressed, from prevention to treatment and recovery. With a team of over
              30 specialists across multiple disciplines, we're equipped to handle a wide range of medical needs under
              one roof.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 group"
                  style={{
                    opacity: textVisible ? 1 : 0,
                    transition: "opacity 0.5s ease, transform 0.3s ease",
                    transitionDelay: `${index * 0.1 + 0.3}s`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: colors.primaryLight }}
                  >
                    <span style={{ color: colors.primary }}>{feature.icon}</span>
                  </div>
                  <span className="font-medium" style={{ color: colors.text.dark }}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="px-8 py-3 rounded-button font-medium shadow-md whitespace-nowrap inline-flex items-center gap-2 group transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: colors.primary, color: "white" }}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Contact Us
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
