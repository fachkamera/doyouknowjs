/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const { backgroundImages } = require('./src/assets/tailwind-assets')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 15s ease infinite',
        flash: 'flash 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: () => ({
        floatingCogs: backgroundImages['floating-cogs']('#222'),
        tic: backgroundImages['tic']('#222'),
        toc: backgroundImages['toc']('#222'),
        meteor: backgroundImages['meteor']('#222'),
        gradient: 'linear-gradient(-45deg, #e1957e, #ec5b92, #52b5d9, #61e6c7)',
        gradientgreen:
          'linear-gradient(-45deg, rgba(2,0,36,1) 0%, rgba(63,98,18,1) 35%, rgba(22,101,52,1) 100%)',
      }),
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
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
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
