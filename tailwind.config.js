/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gentleBounce: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "gentle-bounce": "gentleBounce 3s ease-in-out infinite",
        "spin-slow": "spin 5s linear infinite",
      },
      colors: {
        paleYellow: "#ffeea9",
        50: "#eff6ff",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
      },
    },
  },
  plugins: [],
};
