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
      'hovergreen': '#3ca827',
      
      'lightest': '#DEF5E5',
      'lighter': '#BCEAD5',
      'light': '#9ED5C5',
      'dark': '#8EC3B0',
      'darker': '#6a9183',
      'darkest': '#3c524a'
    }
    },
  },
  plugins: [],
}
