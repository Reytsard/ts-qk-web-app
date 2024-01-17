/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#6C1355",
      orange: "#F6931C",
    },
    backgroundImage: {
      dashboard: "url('./src/assets/dashboard-bg.png')",
    },
    extend: {
      gridTemplateColumns: {
        dashboard: "2fr 1fr",
      },
    },
  },
  plugins: [],
};
