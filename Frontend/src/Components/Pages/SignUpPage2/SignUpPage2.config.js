/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          black: "var(--black)",
          "gray-700": "var(--gray-700)",
          "primary-text-color": "var(--primary-text-color)",
          white: "var(--white)",
          whitewhite: "var(--whitewhite)",
        },
        fontFamily: {
          "body-1-normal": "var(--body-1-normal-font-family)",
          "body-medium-medium": "var(--body-medium-medium-font-family)",
        },
      },
    },
    plugins: [],
  };
  