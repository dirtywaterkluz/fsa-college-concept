/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#20252e",
        navy: "#08213f",
        "navy-2": "#12385e",
        gold: "#c59a31",
        "gold-2": "#f2d079",
        ivory: "#f8f5ec",
        slate: "#52616f",
        teal: "#237784"
      },
      boxShadow: {
        soft: "0 22px 60px rgba(8, 33, 63, 0.14)"
      }
    }
  },
  plugins: []
};
