/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#111213',
        primary:'#2F2F2F',
        secondary:'#0f0f10',
        accent:'#74717a',
        text:'#e4f3fb'
      },
    },
  },
  plugins: [],
}