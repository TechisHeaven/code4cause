/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E294E",
        primaryHover: "#201855",
        secondary: "#D67AB1",
        secondaryHover: "#E145A2",
        textMain: "#333333",
        textSecondary: "#777777",
        background: "#F9F7F3",
      },
      fontFamily: {
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
