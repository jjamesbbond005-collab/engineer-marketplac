/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        accent: '#14b8a6',
        panel: '#0f172a',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
};
