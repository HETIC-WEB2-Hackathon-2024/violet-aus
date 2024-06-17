/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        light: '#a770c1',
        base: '#9554b3',
        dark: '#843da5',
      },
      secondary: {
        light: '#80c35d',
        base: '#72b354',
        dark: '#5f9f49',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        base: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      white: "#FAFAFA",
      black: "#050505",
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
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
    fontWeight: {},
    extend: {},
  },
  plugins: [],
});