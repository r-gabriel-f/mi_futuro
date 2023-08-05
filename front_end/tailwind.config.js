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
        'fondo-color': "url('https://www.transparenttextures.com/patterns/carbon-fibre-big.png')",
        'baner':"url('/src/assets/img/uyuni.jpg')"
      }
    },
  },
  plugins: [],
}

