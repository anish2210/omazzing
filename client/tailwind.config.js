/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        babyPink: "#ffe6f0",
        pinkAccent: "#ffb6c1",
        gradientStart: "#f19ad2",
        gradientEnd: "#ab4ee1",
        deepPurple: "#9743c8",
      },
      animation: {
        bounceBar: "bounceBar 1s infinite ease-in-out",
        shimmer: "shimmer 2s infinite linear",
        gradientProgress: "gradientProgress 3s ease-in-out infinite",
      },
      keyframes: {
        bounceBar: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
        gradientProgress: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        "gradient-pink": "linear-gradient(to right, #f19ad2, #ab4ee1)",
        "gradient-progress": "linear-gradient(90deg, #f19ad2, #ab4ee1, #f19ad2)",
        shimmer:
          "linear-gradient(to right, #ffe6f0 0%, #ffb6c1 50%, #ffe6f0 100%)",
      },
      backgroundSize: {
        shimmer: "200% 100%",
      },
    },
  },
  plugins: [],
};
