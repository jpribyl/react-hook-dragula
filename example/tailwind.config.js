module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'night-shadz': '#942a57',
        'tapestry-172': '#ac5c7e',
        'tapestry-170': '#aa5579',
        'cannon-pink': '#884461',
        strikemaster: '#965F77',
        'turkish-rose': '#bb7794',
        cosmic: '#6d364e',
        'aqua-forest': '#55aa86',
      },
    },
    height: {
      'min-content': 'min-content',
      'max-content': 'max-content',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
};
