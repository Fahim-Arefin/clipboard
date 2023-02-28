/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        heroHeader:'#6d6875',
        ass: '#adb5bd',
        btnColor:'#26bba4'
      },
      fontFamily:{
        montserrat:['Montserrat']
      }
    },
  },
  plugins: [],
}
