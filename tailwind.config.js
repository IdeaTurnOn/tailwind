/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'torenge': '#FFA43A',
        'tyel-1': '#FFC637',
        'tyel-2': '#FFD15F',
        'tyel-3': '#FFE9B2',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'cadpara': ['Metrophobic', 'sans-serif'],
        'cadheading': ['Oxanium', 'cursive'],
        'cadnav': ['Play', 'sans-serif'],
        'alilogo': ['Anton', 'sans-serif'],


    },
    },
  },
  plugins: [],
}
