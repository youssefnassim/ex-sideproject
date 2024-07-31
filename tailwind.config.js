/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.mdx",
    "./utils/**/*.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        // "2xl": ["1.4rem", "1.5"],
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-newsreader)"],
        mono: ["var(--font-space-mono)"],
        display: ["var(--font-display)"],
      },
      animation: {
        rotation: "rotation 30s linear infinite",
        "3D-Y-rotation": "3D-Y-rotation 10s linear infinite",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "3D-Y-rotation": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
