/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        brand: '#8C30F5',
        'gray-100': '#a8a8a8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
