/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,jsx,tsx}",
    "./components/**/*.{html,js,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        NexaSlab: ["Nexa Slab"],
        OpenSans: ['Open Sans']
      },
      colors: {
      'primary_blue': '#2A9FBC',
      'primary_blue_dark': '#005E83',
      'secondary_gray_light': '#F8F8F8',
      'secondary_gray_medium': '#E4E2E2',
      'primary_gray_dark': '#5C585B',
      'tertiary_yellow': '#F2CF52',
      'error': '#D32B2B',
      'success': '#4ABA55',
      'tertiary_orange': '#FAA635',
      'tertiary_gray_blue': '#B9CAD2',
      'medium_gray-2': '#EFEDED'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    },
  },
  plugins: [],
}
