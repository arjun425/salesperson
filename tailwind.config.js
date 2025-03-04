// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          sky: "#87CEEB", // sky blue background color
        },
        fontFamily: {
          // Using Roboto fonts; ensure you include them in your globals.css or via a link in _document.js if needed.
          roboto: ["Roboto", "sans-serif"],
          "roboto-condensed": ["'Roboto Condensed'", "sans-serif"],
          "roboto-slab": ["'Roboto Slab'", "serif"],
        },
      },
    },
    plugins: [],
  };
  