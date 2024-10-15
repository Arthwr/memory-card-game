/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'svg': "linear-gradient(185deg, rgb(165, 180, 252), rgb(79, 70, 229))"
      }
    },
  },
  plugins: [],
};
