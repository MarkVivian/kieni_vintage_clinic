import type React from "react"
import { useInView } from "../utils/scroll-observer"
import { colors } from "../utils/colors"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export function ContactInfo() {
  const { ref: mapRef, isInView: mapVisible } = useInView()
  const { ref: infoRef, isInView: infoVisible } = useInView()
  const { ref: hoursRef, isInView: hoursVisible } = useInView()

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4" style={{ color: colors.text.dark }}>
          Clinic Location
        </h3>
        <div
          ref={mapRef}
          className="h-80 rounded-lg overflow-hidden shadow-md"
          style={{
            opacity: mapVisible ? 1 : 0,
            transform: mapVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.8645725271112!2d37.07520818980871!3d0.015891530250955303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1787f64978bf88c3%3A0xfdafbecfb85baca!2sKIENI%20VINTAGE%20HEALTH%20CLINIC!5e1!3m2!1sen!2ske!4v1746699407385!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kieni Vintage Health Clinic Location"
          ></iframe>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          ref={infoRef}
          style={{
            opacity: infoVisible ? 1 : 0,
            transform: infoVisible ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: colors.text.dark }}>
            Contact Information
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center mr-3 mt-1">
                <FaMapMarkerAlt size={20} style={{ color: colors.primary }} />
              </div>
              <div>
                <p style={{ color: colors.text.dark }}>Kieni West, Nyeri County</p>
                <p style={{ color: colors.text.dark }}>Kenya</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center mr-3 mt-1">
                <FaPhone size={20} style={{ color: colors.primary }} />
              </div>
              <div>
                <p style={{ color: colors.text.dark }}>(+254) 722-123-456</p>
                <p style={{ color: colors.text.dark }}>(+254) 733-987-654</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center mr-3 mt-1">
                <FaEnvelope size={20} style={{ color: colors.primary }} />
              </div>
              <div>
                <p style={{ color: colors.text.dark }}>info@kienihealthclinic.com</p>
                <p style={{ color: colors.text.dark }}>appointments@kienihealthclinic.com</p>
              </div>
            </li>
          </ul>
        </div>
        <div
          ref={hoursRef}
          style={{
            opacity: hoursVisible ? 1 : 0,
            transform: hoursVisible ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: colors.text.dark }}>
            Business Hours
          </h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span style={{ color: colors.text.medium }}>Monday - Friday:</span>
              <span className="font-medium" style={{ color: colors.text.dark }}>
                8:00 AM - 7:00 PM
              </span>
            </li>
            <li className="flex justify-between">
              <span style={{ color: colors.text.medium }}>Saturday:</span>
              <span className="font-medium" style={{ color: colors.text.dark }}>
                9:00 AM - 5:00 PM
              </span>
            </li>
            <li className="flex justify-between">
              <span style={{ color: colors.text.medium }}>Sunday:</span>
              <span className="font-medium" style={{ color: colors.text.dark }}>
                Closed
              </span>
            </li>
            <li className="flex justify-between mt-4">
              <span style={{ color: colors.text.medium }}>Emergency Care:</span>
              <span className="font-medium" style={{ color: colors.primary }}>
                24/7
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4" style={{ color: colors.text.dark }}>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <SocialButton icon={<FaFacebookF />} />
              <SocialButton icon={<FaTwitter />} />
              <SocialButton icon={<FaInstagram />} />
              <SocialButton icon={<FaLinkedinIn />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: colors.primaryLight, color: colors.primary }}
    >
      {icon}
    </a>
  )
}
