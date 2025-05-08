import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"
import { useInView } from "../utils/scroll-observer"
import { colors } from "../utils/colors"

export function ContactSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="text-center mb-16"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text.dark }}>
            CONTACT US
          </h2>
          <p className="max-w-3xl mx-auto" style={{ color: colors.text.medium }}>
            Have questions or need to schedule an appointment? Reach out to us using the form below or visit our clinic
            during business hours.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
