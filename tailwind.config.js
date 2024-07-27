/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },

      'xl': { 'max': '1335px' },

      'lg': { 'max': '1200px' },

      'md': { 'max': '800px' },

      'sm': { 'max': '639px' },
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#FE9F07',
      "red": "#c00a27",
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [],
}