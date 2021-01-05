module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/img/fondo.jpg')"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
