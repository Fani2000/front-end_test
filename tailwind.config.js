/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#70259B",
      white: "#FFFFFF",
      primaryDark: "#430964",
      secondary: "#D100C9",
    },
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to right bottom, rgba(0,0,0, 0.6), transparent), url('./src/assets/images/hero.png')",
      },
    },
  },
  plugins: [],
};
