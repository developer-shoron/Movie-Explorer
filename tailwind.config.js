/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0C0E13",
        surface: "#14171F",
        "surface-raised": "#1B1F29",
        marquee: "#E3AA3D",
        "marquee-dim": "#8A6A2A",
        ember: "#C1443C",
        ink: "#F1EEE6",
        steel: "#9497A0",
        "steel-dim": "#565A64",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Work Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "2px",
      },
    },
  },
  plugins: [],
};
