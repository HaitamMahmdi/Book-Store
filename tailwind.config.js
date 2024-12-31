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
        textSecondary: "#767070",
      },
      backgroundImage: {
        hero1: "url(src/assets/imgs/landing3.webp)",
      },
      animation: {
        enterFromTop: "enterFromTop 2s linear forwards",
      },
      keyframes: {
        enterFromTop: {
          "0%": { opacity: "0", top: "-1%" },
          "25%": { opacity: "1", top: "50%" },
          "95%": { opacity: "1", top: "50%" },
          "100%": { opacity: "0", top: "50%" },
        },
      },
    },
  },
  plugins: [],
};
