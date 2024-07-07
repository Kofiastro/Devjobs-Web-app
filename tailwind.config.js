/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        Violet: 'hsl(235, 69%, 61%)',
        Lightviolet: 'hsl(235, 82%, 77%)',
        VeryDarkBlue: 'hsl(219, 29%, 14%)',
        Midnight: 'hsl(220, 29%, 10%)',
        White: 'hsl(0, 0%, 100%)',
        LightGray: 'hsl(210, 22%, 96%)',
        Grey: 'hsl(212, 23%, 69%)',
        DarkGrey: 'hsl(214, 17%, 51%)',
      },
    },
  },
  plugins: [],
};
