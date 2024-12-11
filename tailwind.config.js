/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'fathers': {
          // Main brand colors from the website
          blue: {
            DEFAULT: '#003057',  // Dark blue from logo/header
            light: '#3B82F6',    // Lighter blue accents
          },
          orange: {
            DEFAULT: '#F4B223',  // Orange/gold from logo
            light: '#FCD34D',
          },
          // Supporting colors
          navy: '#001B3F',
          slate: '#64748B',
          cream: '#FFF9EA',
        },
        // Semantic colors
        primary: '#003057',    // Main brand blue
        secondary: '#F4B223',  // Brand orange
        accent: '#3B82F6',     // Light blue
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui"],
        heading: ["var(--font-heading)", "serif"],
      },
      gridTemplateColumns: {
        sidebar: "300px auto", // For dashboard layout
        'auto-fill-card': 'repeat(auto-fill, minmax(280px, 1fr))', // For card grids
      },
    },
  },
}; 