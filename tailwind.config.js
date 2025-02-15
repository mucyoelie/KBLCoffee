/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add Raleway as a custom font
        'merriweather-sans': ['"Merriweather Sans"', 'sans-serif'],
      },
      keyframes: {
        slideLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slideLeftToRight 1s ease-in-out',
      },
    },
    
  },
  plugins: [],
}