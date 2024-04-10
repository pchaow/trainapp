/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");


export default {
  content: ["./src/**/*.{html,jsx,tsx,vue,js,ts}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}


