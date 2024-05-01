/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}","./src/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:
    {
      "Montserrat":["Montserrat"],
      "Sans":["Work Sans"],
    },
    extend: {
      colors: {
        'purple1':'rgb(120,99,187)',
        'purple2':'rgb(137,40,218)',
        'byzantium':'	#702963',
        'ivory-white': '#FFFFF0',
        'whitesmoke':'whitesmoke',
        'Mobile-grey':'rgba(52, 52, 52,0.5)',
      },
    },
  },
  plugins: [],
}

