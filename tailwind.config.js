/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      },
      colors:{
        lightBlack: "#1e1e22",
        lightSky: "#edf2fa",
      }
    },
  },
  plugins: [],
}

