/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      white: '#ffffff',
      green: '#47B0A9',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
