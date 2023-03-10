/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        "orangeCustom": "#e5e7eb"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
