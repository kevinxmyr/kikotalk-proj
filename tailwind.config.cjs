/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'alex': ['Alexandria', 'sans-serif'],
        'poppins': "Poppins",
        'oswald': "Oswald"
    },
    colors:{
      'gray': '#f2f2f2',
      'blue': '#0073AA',
      'hoverblue': '#016594',
      'green': '#42B72A',
      'hovergreen': '#3ca827'
    }
    },
  },
  plugins: [],
}
