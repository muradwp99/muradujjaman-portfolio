/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        portfolio: {

          "primary": "#59c378",

          "secondary": "#e4a400",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#6b08a7",

          "warning": "#e4a400",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
