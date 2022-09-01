/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        veryDarkMagenta: 'hsl(300, 43%, 22%)',
        softPink: '#c26fa5',
        darkGrayishMagenta: 'hsl(303, 10%, 53%)',
        lightGrayishMagenta: 'hsl(300, 24%, 96%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        leagueSpartan: ['League Spartan', 'sans-serif']
      },
      width:{
        '30p' : '30%',
      }
    },
  },
  plugins: [],
}
