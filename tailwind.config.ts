/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        monserrat:["Monserrat"]
      },
      fontWeight: {
        'medium': 500,
        'regular': 400,
      },
      colors: {
        'dark': '#232A3C',
        'medium': '#363740',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  mode: "jit",
  plugins: [],
};
