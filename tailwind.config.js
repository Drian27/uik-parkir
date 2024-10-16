/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D7C66",
        secondary: "#FFCF00",
      },
    },
  },
  plugins: [],
};
