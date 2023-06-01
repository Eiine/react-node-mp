/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderHome: "rgba(51, 51, 51, 0.4);",
        border: "rgb(51,51,51);",
        bgButton: "#AACCFF",
        colorButton: "#10224D",
      },
      boxShadow: {
        cardShadow: "0px 4px 4px rgba(0, 0, 0, 0.1);",
        insetShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);",
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
