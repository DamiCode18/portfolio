/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        giggle: {
          '0%, 100%': {transform: 'rotate(-5deg)'},
          '50%, 100%': {transform: 'rotate(5deg)'}
        }
      },
      animation: {
        giggle: 'giggle 3s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
