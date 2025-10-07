/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#22c7b8",
          dark: "#16a79a",
          light: "#b8f1eb"
        }
      },
      dropShadow: {
        card: "0 8px 20px rgba(0,0,0,0.08)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};
