import { StatCard } from "./StatCard"
import { colors } from "../utils/colors"
import { FaSmile, FaUserMd, FaClock, FaAward } from "react-icons/fa"

export function StatisticsSection() {
  const stats = [
    {
      icon: <FaSmile />,
      value: "5000+",
      label: "Happy Patients",
    },
    {
      icon: <FaUserMd />,
      value: "30+",
      label: "Qualified Doctors",
    },
    {
      icon: <FaClock />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <FaAward />,
      value: "12",
      label: "Medical Awards",
    }
  ]

  return (
    <section className="py-16" style={{ backgroundColor: colors.background.gray }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} icon={stat.icon} value={stat.value} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
