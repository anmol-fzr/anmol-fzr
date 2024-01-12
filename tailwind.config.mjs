/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svg}",
    "./public/**/*.svg",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#181825",
        // primary:"#090B0C",
        secondary: "#cba6f7",
        // secondary: "#84BCEB",
        accent: "#502CDD",
        text: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
