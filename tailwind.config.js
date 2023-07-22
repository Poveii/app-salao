/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          500: '#282828',
          700: '#141414',
          900: '#000000',
        },
        white: {
          400: '#ffffff',
          500: '#efefef',
        },
        gray: {
          400: '#d9d9d9',
          450: '#dbdbdb',
          700: '#8f8f8f',
        },
        error: '#f23a5f',
        success: '#3dd132',
        ok: '#31e0e0',
      },
    },
  },
  plugins: [],
}
