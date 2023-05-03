/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Inter': ["'Inter', sans-serif"],
    },
    extend: {
      colors: {
        'black-soft': 'rgba(0, 0, 0, 0.85)',
        'cleava-gold': '#FFBD59'
      },
    },
  },
  plugins: [],
}