/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
 ],

  theme: {
    extend: { 
      colors : {
        main:"#2AA8FF",
        sec : "#102851"
      } , 
      container : {
        center : true
      }

    },
  },
  plugins: [ 
    flowbite()
  ],
}

