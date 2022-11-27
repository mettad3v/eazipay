/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.4rem",
        34: "8.5rem",
        68: "17rem",
        86: "21.5rem",
        100: "30rem",
        105: "34.1rem",
      },
    },
  },
  plugins: [],
};
