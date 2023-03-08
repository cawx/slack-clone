/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'purple': '#541554',
      'beige': '#f4ede4',
      'blue': '#007aff',
      'white': '#ffffff',
      'yellow': '#ecb22e'
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'notosans': ['Noto Sans', 'sans-serif']
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    
  },
  plugins: [],
}
