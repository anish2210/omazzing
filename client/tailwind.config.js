// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        babyPink: "#ffe6f0",
        pinkAccent: "#ffb6c1",
      },
    },
  },
  plugins: [],
};
