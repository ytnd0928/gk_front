/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        dotgothic: ["DotGothic16", "sans-serif"],
      },
      boxShadow: {
        "custom-color": "0 10px 20px rgba(255, 0, 0, 0.25)",
      },
    },
  },
  variants: {},
  plugins: [],
};
