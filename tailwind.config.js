/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          violet: "#5964E0",
          "light-violet": "#939BF4",
          "very-dark-blue": "#19202D",
          midnight: "#121721",
        },
        secondary: {
          white: "#FFFFFF",
          "light-gray": "#F4F6F8",
          gray: "#9DAEC2",
          "dark-gray": "#6E8098",
        },
      },
    },
  },
  plugins: [],
};
