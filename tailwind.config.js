const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    "./src/**/*.pug"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'guitars': "url('/src/assets/images/bnw.jpg')"
      }),
      colors: {
        purple: colors.purple[600]
      }
    },
    fontFamily: {
      bungee: ['Bungee Shade', 'cursive'],
      fugaz: ['Fugaz One', 'cursive']
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
