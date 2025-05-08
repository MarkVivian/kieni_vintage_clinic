import { DepartmentCard } from "./DepartmentCard"
import { useInView } from "../utils/scroll-observer"
import { colors } from "../utils/colors"
import { FaHeartbeat, FaMicroscope, FaHospital, FaFirstAid } from "react-icons/fa"

export function DepartmentsSection() {
  const { ref, isInView } = useInView()

  const departments = [
    {
      title: "CARDIOLOGY",
      icon: <FaHeartbeat />,
      description:
        "Our cardiology department provides comprehensive care for heart conditions, from preventive services to advanced treatments, all delivered by our expert cardiologists.",
    },
    {
      title: "DIAGNOSIS",
      icon: <FaMicroscope />,
      description:
        "Our diagnostic services utilize state-of-the-art technology and expert analysis to provide accurate and timely results, guiding your treatment journey effectively.",
    },
    {
      title: "SURGERY",
      icon: <FaHospital />,
      description:
        "Our surgical team combines expertise with compassion, offering both routine and complex procedures with the highest standards of care and safety protocols.",
    },
    {
      title: "FIRST AID",
      icon: <FaFirstAid />,
      description:
        "Our emergency services provide immediate, expert care for urgent medical needs, available 24/7 with minimal wait times and a compassionate approach.",
    },
  ]

  return (
    <section id="departments" className="pt-16 pb-24" style={{ backgroundColor: colors.primary }}>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "white" }}>
            OUR DEPARTMENTS
          </h2>
          <p className="max-w-3xl mx-auto" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            We offer comprehensive healthcare services across multiple specialized departments, ensuring you receive the
            best possible care for all your medical needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((department, index) => (
            <DepartmentCard
              key={index}
              title={department.title}
              icon={department.icon}
              description={department.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
