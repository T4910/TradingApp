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
      animation: {
        // Change the animation duration
        'pulse-4s': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // 2 seconds
      },
      colors: {
        white: '#e5ede5',
        black: '#080a08',
        primary: '#3cf646',
        secondary: '#134e3a',
        accent: '#851a1a',
        greens: {
          75: '#394739',
          50: '#667f66',
          25: '#9cb09c',
          10: '#d5ddd5',
          5: "#e5ede5"
        },
        gray: {
          75: "#464746",
          50: "#838483",
          25: "#C1C2C1",
          10: "#E6E7E6",
          5: "#F3F3F3",
        },
        error: "#D92402",
        warning: "#BEAF5A",
        ok: "#31E0A6",
        // primary: "#36a9e2",
        // secondary: "#134e4e",
        // accent: "#e477a4",
        // black: "#0d1414",
        // white: "#e4e9e6",
        // gray: {
        //   75: "#414750",
        //   50: "#7D8087",
        //   25: "#B9BBBE",
        //   10: "#DEDEE0",
        //   5: "#E9EAEA",
        // }
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