// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#809a4b', // Main olive green
          dark: '#5a6d2c', // Deeper green for text/hover
          light: '#cdd9ae', // Backgrounds / soft accents
          accent: '#f7f4ed', // Light neutral, seen in hero background
        },
        neutral: {
          900: '#1f1f1f', // Header/Footer text
          800: '#3a3a3a', // Body text
          100: '#f8f8f8', // Card background
        },
      },
      fontFamily: {
        heading: ['"Roboto Slab"', 'serif'], // Matches the serif headline style
        body: ['"Open Sans"', 'sans-serif'], // Clean sans-serif body
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
