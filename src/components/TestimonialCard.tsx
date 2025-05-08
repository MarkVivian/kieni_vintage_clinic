import { useInView } from "../utils/scroll-observer"
import { colors } from "../utils/colors"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"

interface TestimonialCardProps {
  text: string
  author: string
  role: string
  initials: string
  rating: number
  index: number
}

export function TestimonialCard({ text, author, role, initials, rating, index }: TestimonialCardProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex items-center mb-6">
        <div style={{ color: colors.primary }} className="flex">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <FaStar key={i} className="transition-transform duration-300 group-hover:scale-110" />
          ))}
          {rating % 1 !== 0 && <FaStarHalfAlt className="transition-transform duration-300 group-hover:scale-110" />}
        </div>
      </div>
      <p style={{ color: colors.text.medium }} className="mb-6">
        {text}
      </p>
      <div className="flex items-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: colors.primaryLight }}
        >
          <span style={{ color: colors.primary }} className="font-semibold">
            {initials}
          </span>
        </div>
        <div>
          <h4
            className="font-semibold transition-colors duration-300 group-hover:text-primary"
            style={{ color: colors.text.dark }}
          >
            {author}
          </h4>
          <p className="text-sm" style={{ color: colors.text.light }}>
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}
