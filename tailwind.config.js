/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Nunito Sans",
      },
      colors: {
        main: "#FBF1EF",
        second: "#F56C4A",
      },
    },
  },
  plugins: [],
};
