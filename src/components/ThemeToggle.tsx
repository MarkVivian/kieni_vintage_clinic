"use client"

import { useTheme } from "./theme-context"
import { FaPalette } from "react-icons/fa"

export function ThemeToggle() {
  const { isBlueTheme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: isBlueTheme ? "#1E88E5" : "#2A9D8F",
        color: "white",
      }}
      aria-label="Toggle color theme"
    >
      <FaPalette size={20} />
    </button>
  )
}
