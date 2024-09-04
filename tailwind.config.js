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
          100: "#010C15", //background color
          200: "#011627", //template color
          300: "#071511", //github outer color
        },
        gray: {
          custom: '#607B96',
          custom2: '#42D9AC',//github inner color
        },
      },
      fontFamily: {
        'fira-code': ['"Fire Code"', 'monospace'],
      },
      borderColor: {
        'white': '#1e2d3d',
      },
    },
  },
  plugins: [],
};
