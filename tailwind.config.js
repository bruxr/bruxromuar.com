module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      blue: {
        200: '#e9f5fe',
        400: '#46a4eb',
        600: '#2f92dc',
        800: '#466d8a',
      },
      gray: {
        200: '#a0a0a0',
        400: '#464646',
      },
      'cool-gray': {
        100: '#1a1c24',
        400: '#4a515f',
        600: '#697280',
        800: '#8b95a5',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        68: '17rem',
        88: '22rem',
        112: '40rem',
      },
    },
  },
  plugins: [],
};
