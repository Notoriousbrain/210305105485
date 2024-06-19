/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mont: ["montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "my-primary": "#000000",
      },
    },
    screens: {
      lg: { max: "1800px" },
      lgm: { max: "1100px" },
      md: { max: "990px" },
      mds: { max: "800px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
  },
};
