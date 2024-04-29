/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}","./src/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:
    {
      "Montserrat":["Montserrat"]
    },
    extend: {
      colors: {
        'ivory-white': '#FFFFF0',
        'whitesmoke':'whitesmoke',
        'Mobile-grey':'rgba(52, 52, 52,0.5)',
      },
    },
  },
  plugins: [],
}

