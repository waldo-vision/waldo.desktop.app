module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans'],
        'open-sans': ['Open Sans', 'sans'],
        'jost': ['Jost', 'sans'],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
