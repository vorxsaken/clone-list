/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': {transform: 'rotate(-20deg)'},
          '50%': {transform: 'rotate(20deg)'},
          '75%': {transform: 'rotate(-5deg)'},
          '100%': {transform: 'rotate(5deg)'},
        }
      },
      animation: {
        'wiggle': 'wiggle 0.5s linear',
      },
      colors: {
        brown: {
          400: '#704F4F',
          500: '#3C2A21',
          600: '#1A120B'
        },
        dark: {
          300: '#5A5A5A',
          400: '#212121',
          500: '#181818'
        }
      },
      fontFamily: {
        'paytone-one': ['Rubik Mono One'],
        'bungee': ['Bungee']
      }
    },
  },
  plugins: [],
}