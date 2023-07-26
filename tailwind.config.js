/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#FFF',
        gray: {
          90: '#121214',
          80: '#202024',
          30: '#c4c4cc',
          10: '#e1e1e6',
        },
        green: {
          50: '#00875f',
          30: '#00b37e',
        },
        purple: {
          50: '#7465d4',
        },
      },
      maxWidth: {
        spaceLeft: 'calc(100vw - ((100vw - 1180px) / 2))',
      },
    },
  },
  plugins: [],
}
