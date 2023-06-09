/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "'Roboto', 'sans-serif'"
      },
      colors: {
        background : "#181818"
      },
    },
  },
  plugins: [],
}
