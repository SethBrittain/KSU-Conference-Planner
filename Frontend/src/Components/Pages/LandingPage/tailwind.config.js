/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "blue-200": "var(--blue-200)",
          "blue-600": "var(--blue-600)",
          darkdark: "var(--darkdark)",
          "primary-color": "var(--primary-color)",
          "primary-text-color": "var(--primary-text-color)",
          white: "var(--white)",
          whitewhite: "var(--whitewhite)",
        },
        fontFamily: {
          "body-medium-medium": "var(--body-medium-medium-font-family)",
          "text-base-font-semibold": "var(--text-base-font-semibold-font-family)",
        },
      },
    },
    plugins: [],
  };
  