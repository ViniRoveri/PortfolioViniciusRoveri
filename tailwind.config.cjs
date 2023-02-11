/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      title: 'Allerta Stencil, sans-serif',
      text: 'Inter, sans-serif'
    },
    screens:{
      sm: '426px',
      md: '769px',
      lg: '1025px',
    },
    extend: {
      colors:{
        default:{
          white: '#eee',
          lightOrange: '#ffe7cc',
          orange: '#ff9316',
          darkOrange: '#1a0f02',
          black: '#111'
        }
      }
    }
  },
  plugins: [],
}
