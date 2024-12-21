/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#393280",
        secondary: "#ED553B",
        white: "#FFFFFF",
        sectionBg: "#FCEBEA",
      },
    },
  },
  plugins: [],
};
