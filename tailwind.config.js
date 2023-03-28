/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
}