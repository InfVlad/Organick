/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      yellowtail: 'var(--font-yellowtail)',
      roboto: 'var(--font-roboto)',
      openSans: 'var(--font-opensans)',
    },
    extend: {
      colors: {
        'primary-green': '#274C5B',
        'secondary-green': '#7EB693',
        'third-green': '#EFF6F1',
        'primary-yellow': '#EFD372',
        'primary-grey': '#525C60',
        'secondary-grey': '#D4D4D4',
        'primary-white': '#F9F8F8',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')],
};

module.exports = config;
