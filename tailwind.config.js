/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dark", "aqua", "bumblebee", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "dracula"],
  },
  plugins: [
    require("@tailwindcss/typography"), 
    require('daisyui'),
  ],
}

