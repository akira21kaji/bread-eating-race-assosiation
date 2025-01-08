/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        almendra: ["Almendra", "sans-serif"],
      },
      backgroundImage: {
        "about-bg": "url('./src/assets/assosiation/assosiate.png')",
        "rule-bg": "url('./src/assets/rule/rule_bgimage.webp')",
        "main-bg": "url('./src/assets/kv/mv_bgimage.webp')",
      },
      colors: {
        "brown-900": "#B78A60",
        "border-brown": "#4D3A3F",
        "button-orange": "#E07E21",
      },
    },
  },
  plugins: [],
};
