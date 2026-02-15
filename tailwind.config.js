/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#C34129',
        primaryContent: '#183A5A',
        primarySubcontent: '#EFB758',
        primaryBase: '#EFB758',
        primaryAccent: '#183A5A',
        primaryBg: '#f6f6f6',
      },
    },
  },
  plugins: [],
}