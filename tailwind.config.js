/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/bg-hero1.jpg')",
        intructors: "url('/assets/images/comments-bg1.jpg')",
        comments: "url('/assets/images/comments-bg2.jpg')",
        info: "url('/assets/images/info-bg.jpg')",
        location: "url('/assets/images/location-bg.jpg')",
        categories: "url('/assets/images/categories-bg.jpg')",
      },
      colors: {
        primary: colors.red,
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#dc2626',
          800: '#b91c1c',
          900: '#7f1d1d',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('flowbite/plugin')],
};
