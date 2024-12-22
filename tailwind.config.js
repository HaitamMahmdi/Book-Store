/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#173F5F",
        secondary: "#ED553B",
        white: "#FFFFFF",
        sectionBg: "#FCEBEA",
      },
      backgroundImage: {
        hero1: "url(src/assets/imgs/landing3.webp)",
      },
    },
  },
  plugins: [],
};
