/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#FAFAFA",
        primary: {
          DEFAULT: "#EAB308", // Gold accent
          dark: "#CA8A04",
        },
        secondary: {
          DEFAULT: "#1E293B", // Deep Navy/Slate
          dark: "#0F172A",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}


