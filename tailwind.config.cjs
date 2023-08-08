/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      width: {
        128: '32rem',
      },
      height: {
        128: '32rem',
      },
      fontFamily: {
        sans: ['MadeOuterSans', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        imagenFondo: '0 0 100px 100px black inset;',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
