/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      orange: '#FF7B01',
      yellow: '#FAFF01',
      white: '#FFFFFF',
      black: '#000000',
      darkorange: '#D46701',
      darkyellow: '#D0D501'
    },
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'html': {
          'scroll-behavior': 'smooth',
        },
      });
    },
  ],
}

