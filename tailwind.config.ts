import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#3E6FBF",
        background: "#F0F6FF",
        secondary: "#E0ECFF",
        blue: {
          50: "#E5EFFF", // Lightest Blue
          100: "#D9E7FF", // Lighter Blue
          200: "#B2CFFF", // Light Blue
          300: "#A9C3D5", // Sky Gray Blue
          400: "#517DC5", // Light Blue
          500: "#3E6FBF", // Blue
          600: "#142D55", // Dark Blue
        },
        gray: {
          50: "#E3E3E3", // Lightest Gray
          100: "#CBCBCB", // Lighter Gray
          200: "#C6C6C6", // Light Gray
          300: "#A9A9A9", // Dark Gray
          400: "#404040", // Darker Gray
          500: "#333134",
          600: "#363436",
          700: "#C8DDFF",
        },
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
    },
  },
  plugins: [],
};
export default config;
