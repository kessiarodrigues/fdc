/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,jsx,tsx}",
    "./components/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NexaSlab: ["Nexa Slab"],
        OpenSans: ['Open Sans']
      }
    },
  },
  plugins: [],
}
