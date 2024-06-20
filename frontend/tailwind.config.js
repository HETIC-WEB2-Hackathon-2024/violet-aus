/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        light_white: "#a392b9",
        base_white: "#81689D",
        dark_white: "#684a8a",
        light_dark: "#81689d",
        base_dark: "#684a8a",
        dark_dark: "#522c7c",
      },
      secondary: {
        light_white: "#f8de8c",
        base_white: "#f4d677",
        dark_white: "#f1d066",
        light_dark: "#caaa59",
        base_dark: "#b39554",
        dark_dark: "#8b724c",
      },
      gray: {
        darkest: "#000000",
        dark: "#161618",
        base: "#212124",
        light: "#818181",
        lightest: "#FFFFFF",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      h1: "2.986rem",
      h2: "2.488rem",
      h3: "2.074rem",
      h4: "1.728rem",
      h5: "1.44rem",
      h6: "1.2rem",
      p: "1rem",
      small: "0.833rem",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
  darkmode: "class",
});
