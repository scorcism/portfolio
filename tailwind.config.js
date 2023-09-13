/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#2c3333",
        white: "#ffffdd",
        gold: "wheat"
      },
      fontFamily: {
        Poppins: ['Poppins', "sans-serif"],
        "League-Spartan": ['League Spartan', "sans-serif"],
        Satisfy: ['Satisfy',"serif"]
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "linear-gradient(90deg, white,gray, white);"
      })
    },
    screens: {
      xs: "350px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}