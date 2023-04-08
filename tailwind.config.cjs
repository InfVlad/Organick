/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      yellotail: 'var(--font-yellowtail)',
      roboto: 'var(--font-roboto)',
      openSans: 'var(--font-opensans)',
    },
    extend: {
      colors: {
        'primary-green': '#274C5B',
        'secondary-green': '#577E65',
        'third-green': '#EFF6F1',
        'primary-yellow': '#EFD372',
        'primary-grey': '#525C60',
        'secondary-grey': '#D4D4D4',
        'primary-white': '#F9F8F8',
      },
    },
  },
  plugins: [],
};

module.exports = config;
