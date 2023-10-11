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
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
