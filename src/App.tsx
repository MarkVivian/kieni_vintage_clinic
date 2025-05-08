import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { DepartmentsSection } from "./components/DepartmentsSection"
import { AboutSection } from "./components/AboutSection"
import { StatisticsSection } from "./components/StatisticsSection"
import { DoctorsSection } from "./components/DoctorsSection"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"
import { ThemeProvider } from "./components/theme-context"
import { ThemeToggle } from "./components/ThemeToggle"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <DepartmentsSection />
          <AboutSection />
          <StatisticsSection />
          <DoctorsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
