/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0e5944",
          200: "#0d503d",
          300: "#0a3e30",
          400: "#083529",
          500: "#06241b",
          600: "#041b14"
        },
      },
    },
  },
  plugins: [],
}
