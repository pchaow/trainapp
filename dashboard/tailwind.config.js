/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
  content: ["./src/**/*.{html,jsx,tsx,vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
=======

const {nextui} = require("@nextui-org/react");


export default {
  content: ["./src/**/*.{html,jsx,tsx,vue,js,ts}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
>>>>>>> 2d1207133c3571fe6ace406159b747164f756796
}

