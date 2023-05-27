/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nano': ['nano', 'sans-serif'],
        'inter': ['inter', 'sans-serif']
      },
      backgroundImage: {
        'BG': "url('./styles/7-noise-texture-overlays-5.png')",
      }
    },
  },
  plugins: [],
}