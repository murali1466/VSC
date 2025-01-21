/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#513089",
        secondary:"#ff9924",
        darkBlue:"#273b9f",
        text:"#ffffff"
      },
      fontFamily: {
        mplus: ['"Poppins"', 'serif'],
        lora:['"Lora"', 'serif'],
      },
      boxShadow:{
        customShadow:"0px 0px 10px rgba(0,0,0,0.3)"
      }
    },
  },
  plugins: [],
}