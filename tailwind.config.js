/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/src/index.js",
    "/src/**/*.{js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  purgue:[
    "/src/index.js",
    "/src/**/*.{js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}