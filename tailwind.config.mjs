/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#f85919',
        'grey': '#818181',
        'white': '#ffffff',
        'blue': '#2f3f70',
        'black': '#000000',
      },
    },
  },
  plugins: [],
};

export default config;
