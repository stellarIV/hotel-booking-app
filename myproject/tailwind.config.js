/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppons: ["poppins-regular", "serif"]
      },
      colors:{
        primary: "#fefefe",
        secondary: "#010101",
        tertiary: "#58f2b7",
        quaternary: "#147755"
      },
      container:{
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },
      component:{
        center: true,
        margin:{
          DEFAULT:"1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },
    },
    
  },
  plugins: [],
  
}