/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["'Inter', sans-serif"],
    },
    extend: {
      colors: {
        "black-soft": "rgba(0, 0, 0, 0.85)",
        "cleva-gold": "#FFBD59",
        "yellow-700": " #8E4B10",
        "yellow-100": "#FDF6B2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
