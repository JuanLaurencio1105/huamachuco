/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue' : '#0072A9',
        'blue-two': '#2270E2'
      },
      backgroundColor:['responsive', 'hover', 'focus', 'menu-open'],
    },
  },
  plugins: [],
}

