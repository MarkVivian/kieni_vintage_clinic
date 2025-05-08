import { TestimonialCard } from "./TestimonialCard"
import { useInView } from "../utils/scroll-observer"
import { colors } from "../utils/colors"

export function TestimonialsSection() {
  const { ref: headingRef, isInView: headingVisible } = useInView()

  const testimonials = [
    {
      text: '"The care I received at Kieni Vintage Health Clinic was exceptional. Dr. Parker took the time to listen to my concerns and developed a treatment plan that addressed all my needs. The entire staff was professional and compassionate."',
      author: "Jennifer Martinez",
      role: "Cardiology Patient",
      initials: "JM",
      rating: 5,
    },
    {
      text: "\"I've been bringing my children to Dr. Johnson for years, and I couldn't be happier with the care they receive. She's patient, thorough, and genuinely cares about their well-being. The clinic is always clean and the staff is friendly.\"",
      author: "David Thompson",
      role: "Parent of Pediatric Patients",
      initials: "DT",
      rating: 5,
    },
    {
      text: '"After my stroke, Dr. Chen and his rehabilitation team provided exceptional care that helped me regain my independence. Their expertise, combined with their compassionate approach, made a difficult time much easier to navigate."',
      author: "Amanda Wilson",
      role: "Neurology Patient",
      initials: "AW",
      rating: 4.5,
    },
  ]

  return (
    <section className="py-20" style={{ backgroundColor: colors.background.gray }}>
      <div className="container mx-auto px-4">
        <div
          ref={headingRef}
          className="text-center mb-16"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text.dark }}>
            PATIENT TESTIMONIALS
          </h2>
          <p className="max-w-3xl mx-auto" style={{ color: colors.text.medium }}>
            Hear what our patients have to say about their experiences at Kieni Vintage Health Clinic.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
              initials={testimonial.initials}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
