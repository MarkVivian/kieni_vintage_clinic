"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define the color themes
export const greenTheme = {
  primary: "#2A9D8F", // Teal
  primaryHover: "#238F82",
  primaryLight: "#E6F2F0", // Light teal for backgrounds
}

export const blueTheme = {
  primary: "#1E88E5", // Blue
  primaryHover: "#1976D2",
  primaryLight: "#E3F2FD", // Light blue for backgrounds
}

type ThemeContextType = {
  isBlueTheme: boolean
  toggleTheme: () => void
  themeColors: typeof greenTheme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isBlueTheme, setIsBlueTheme] = useState(false)

  // Update the colors object when theme changes
  const themeColors = isBlueTheme ? blueTheme : greenTheme

  // Update CSS variables when theme changes
  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", themeColors.primary)
    document.documentElement.style.setProperty("--color-primary-hover", themeColors.primaryHover)
    document.documentElement.style.setProperty("--color-primary-light", themeColors.primaryLight)
  }, [isBlueTheme, themeColors])

  const toggleTheme = () => {
    setIsBlueTheme((prev) => !prev)
  }

  return <ThemeContext.Provider value={{ isBlueTheme, toggleTheme, themeColors }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
