/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text-color": "var(--primary-text-color)",
        white: "var(--white)",
        whitewhite: "var(--whitewhite)",
      },
      fontFamily: {
        "body-medium-medium": "var(--body-medium-medium-font-family)",
      },
    },
  },
  plugins: [],
};
