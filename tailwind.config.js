/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lomo: ['LomoCopy', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500, 
      },
    },
  },
  plugins: [],
};
