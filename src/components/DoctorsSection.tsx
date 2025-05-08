import { DoctorCard } from "./DoctorCard"
import { useInView } from "../utils/scroll-observer"

export function DoctorsSection() {
  const { ref: headingRef, isInView: headingVisible } = useInView()

  const doctors = [
    {
      name: "Dr. Emily Parker",
      role: "Cardiologist",
      bio: "Dr. Parker brings over 20 years of experience in cardiology, specializing in preventive care and heart disease management.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20female%20doctor%20in%20her%2050s%20with%20short%20blonde%20hair%2C%20wearing%20a%20white%20coat%20and%20stethoscope.%20She%20has%20a%20warm%2C%20confident%20smile%20and%20is%20standing%20against%20a%20clean%2C%20light%20blue%20background.%20The%20image%20should%20convey%20experience%2C%20trustworthiness%2C%20and%20compassion.%20The%20lighting%20should%20be%20soft%20and%20professional.&width=600&height=700&seq=3&orientation=portrait",
    },
    {
      name: "Dr. Robert Chen",
      role: "Neurologist",
      bio: "Dr. Chen is a renowned neurologist with expertise in treating complex neurological disorders and stroke rehabilitation.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20doctor%20in%20his%2060s%20with%20gray%20hair%20and%20glasses%2C%20wearing%20a%20white%20coat%20and%20stethoscope.%20He%20has%20a%20friendly%2C%20experienced%20expression%20and%20is%20standing%20against%20a%20clean%2C%20light%20blue%20background.%20The%20image%20should%20convey%20wisdom%2C%20experience%2C%20and%20approachability.%20The%20lighting%20should%20be%20soft%20and%20professional.&width=600&height=700&seq=4&orientation=portrait",
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Pediatrician",
      bio: "Dr. Johnson specializes in pediatric care, focusing on child development and preventive healthcare for children of all ages.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20female%20doctor%20in%20her%2030s%20with%20long%20dark%20hair%2C%20wearing%20a%20white%20coat%20and%20stethoscope.%20She%20has%20a%20friendly%2C%20confident%20smile%20and%20is%20standing%20against%20a%20clean%2C%20light%20blue%20background.%20The%20image%20should%20convey%20professionalism%2C%20approachability%2C%20and%20expertise.%20The%20lighting%20should%20be%20soft%20and%20professional.&width=600&height=700&seq=5&orientation=portrait",
    },    {
      name: "Dr. Robert Chen",
      role: "Neurologist",
      bio: "Dr. Chen is a renowned neurologist with expertise in treating complex neurological disorders and stroke rehabilitation.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20doctor%20in%20his%2060s%20with%20gray%20hair%20and%20glasses%2C%20wearing%20a%20white%20coat%20and%20stethoscope.%20He%20has%20a%20friendly%2C%20experienced%20expression%20and%20is%20standing%20against%20a%20clean%2C%20light%20blue%20background.%20The%20image%20should%20convey%20wisdom%2C%20experience%2C%20and%20approachability.%20The%20lighting%20should%20be%20soft%20and%20professional.&width=600&height=700&seq=4&orientation=portrait",
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Pediatrician",
      bio: "Dr. Johnson specializes in pediatric care, focusing on child development and preventive healthcare for children of all ages.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20female%20doctor%20in%20her%2030s%20with%20long%20dark%20hair%2C%20wearing%20a%20white%20coat%20and%20stethoscope.%20She%20has%20a%20friendly%2C%20confident%20smile%20and%20is%20standing%20against%20a%20clean%2C%20light%20blue%20background.%20The%20image%20should%20convey%20professionalism%2C%20approachability%2C%20and%20expertise.%20The%20lighting%20should%20be%20soft%20and%20professional.&width=600&height=700&seq=5&orientation=portrait",
    },
  ]

  return (
    <section id="doctors" className="py-20 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">OUR DOCTORS</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet our team of experienced healthcare professionals dedicated to providing exceptional care with
            compassion and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              role={doctor.role}
              bio={doctor.bio}
              image={doctor.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
