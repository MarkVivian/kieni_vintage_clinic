/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html", "*.{js,ts,jsx,tsx,mdx}"],
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: "#2A9D8F",
          secondary: "#264653",
          "primary-light": "#E6F2F0",
          "text-dark": "#333333",
          "text-medium": "#666666",
          "text-light": "#999999",
          "bg-light": "#F8F9FA",
          "bg-gray": "#F0F2F5",
          "accent-yellow": "#E9C46A",
          "accent-orange": "#F4A261",
          "accent-red": "#E76F51",
        },
        borderRadius: {
          none: "0px",
          sm: "4px",
          DEFAULT: "8px",
          md: "12px",
          lg: "16px",
          xl: "20px",
          "2xl": "24px",
          "3xl": "32px",
          full: "9999px",
          button: "8px",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  