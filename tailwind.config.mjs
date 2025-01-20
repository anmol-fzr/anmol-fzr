import Fluid from "tailwindcss-fluid-type";

/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svg}",
    "./public/**/*.svg",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--clr-primary)",
        secondary: "var(--clr-secondary)",
        accent: "var(--clr-accent)",
        text: "var(--clr-text)",
      },
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(40%)",
          },
        },
        "make-it-smaller": {
          "0%": {
            transform: "translateY(0%)",
          },
          "25%": {
            transform: "translateY(0%) scale(0.75)",
          },
          "50%": {
            transform: "translateY(0%) scale(0.5)",
          },
          "80%": {
            transform: "translateY(0%) scale(0.2)",
          },
          "90%": {
            transform: "translateY(0%) scale(0.1)",
          },
          "100%": {
            transform: "translateY(-70%) scale(0)",
            zIndex: -1,
          },
        },
        "make-it-bigger": {
          "0%": {
            transform: "translateY(0%)",
          },
          "25%": {
            transform: "translateY(0%) scale(1.25)",
          },
          "50%": {
            transform: "translateY(0%) scale(1.5)",
          },
          "80%": {
            transform: "translateY(0%) scale(1.8)",
          },
          "90%": {
            transform: "translateY(0%) scale(1.9)",
          },
          "100%": {
            transform: "translateY(-70%) scale(2)",
            zIndex: -1,
          },
        },
        slide_down: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slide_up: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        "fade-out-down": "fade-out-down linear forwards",
        "make-it-bigger": "make-it-bigger linear forwards",
        slide_down: 'slide_down 0.3s ease-in',
        slide_up: 'slide_up 0.3s ease-out',
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline: scroll())",
      },
    },
  },
  plugins: [Fluid, require("@tailwindcss/typography")],
  darkMode: "class",
};
