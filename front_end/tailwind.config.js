/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ffff',
      },
      backgroundImage: {
        'fondo-color': "url(http://www.transparenttextures.com/patterns/brilliant.png)",
      }
    },
  },
  plugins: [],
}

