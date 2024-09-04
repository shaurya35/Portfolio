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
        black: {
          DEFAULT: "#000",
          100: "#010C15",
          200: "#011627"
        }
      },
      fontFamily: {
        'fira-code': ['"Fire Code"', 'monospace'],
      },
      borderColor: {
        'white': '#1e2d3d',
      },
      fontColor: {
        'gray': '#607B96',
      },
    },
  },
  plugins: [],
};
