/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 15s ease infinite',
        flash: 'flash 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        canvas: {
          dark: 'rgba(10, 13, 21, <alpha-value>)',
          light: 'rgba(238, 241, 247, <alpha-value>)',
        },
        eerieblack: {
          DEFAULT: 'hsla(25,12%,12%,<alpha-value>)',
        },
        gray: {
          vsdark: 'rgb(30, 30, 30)',
        },
      },
      fontFamily: {
        mono: ['var(--font-sourcecodepro)', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        flash: {
          '50%': {
            opacity: '0.7',
          },
        },
      },
      opacity: {
        98: '0.98',
      },
      screens: {
        em32: '32rem',
        em42: '42rem',
        em64: '64rem',
      },
      spacing: {
        4.5: '1.125rem',
      },
    },
  },
  plugins: [],
}
