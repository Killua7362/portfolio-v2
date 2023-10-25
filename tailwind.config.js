/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#242424',
        primary:'#3b3b3b',
        secondary:'#0f0f10',
        accent:'#74717a',
        text:'#e4f3fb'
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}