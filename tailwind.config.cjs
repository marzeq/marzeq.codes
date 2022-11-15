/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      mono: ["Ubuntu Mono", "monospace"]
    }
  }
}