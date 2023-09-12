/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: "#3198CC",
        secondary: "#54D4CA",
        error: "#D92402",
        warning: "#BEAF5A",
        ok: "#31E0A6",
        black: "#060D1A",
        gray: {
          75: "#414750",
          50: "#7D8087",
          25: "#B9BBBE",
          10: "#DEDEE0",
          5: "#E9EAEA",
        }
      },
      backgroundImage: {
        'stocks': "url('/images/stock-market-green-red-graph-black-background-forex-market-trading-92500514.webp')",
      },
    },
    // fontFamily: {
    //   sans: 'lato sans-serif'
    // }
  },
  plugins: [],
}