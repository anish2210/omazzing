/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        babyPink: "#ffe6f0",
        pinkAccent: "#ffb6c1",
      },
      animation: {
        bounceBar: "bounceBar 1s infinite ease-in-out",
      },
      keyframes: {
        bounceBar: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
};
