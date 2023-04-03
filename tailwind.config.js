/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
    extend: {
      height: {
        '128': '32rem',
        '112': '28rem'
      },
      colors: {
        'purple': '#541554',
        'purplesecondary': '#611f69',
        'beige': '#f4ede4',
        'blue': '#007aff',
        'bluelink': '#1264a3',
        'blueplay': '#36c5f0',
        'white': '#ffffff',
        'yellow': '#ecb22e'
      },
    }
    
  },
  plugins: [],
}
