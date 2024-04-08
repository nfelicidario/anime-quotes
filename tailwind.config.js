module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      fontWeight: {
        'rubik-normal': 400,
        'rubik-medium': 500,
        'rubik-bold': 700,
        'oswald-normal': 400,
        'oswald-medium': 500,
        'oswald-bold': 700,
      },
      lineHeight: {
        '18': '4.75rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
