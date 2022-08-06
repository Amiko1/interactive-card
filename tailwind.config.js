/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-violet': '#21092F',
        'purplish-grey': '#8F8694',
        'light-grey': '#DFDEE0',
        'default-red': '#FF5050',
        'default-gradient': '#6348FE',
      },
    },
  },
  plugins: [],
}