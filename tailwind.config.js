/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bgimg.jpg')",
      },
      colors: {
        colorBgBtn: '#FF444A',
        colorBg:'rgba(11, 11, 11, 0.50)',
        colorShowAll:'#009444'
      }
      
    },
  },
  plugins: [require("daisyui")],
};
