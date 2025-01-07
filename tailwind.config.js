module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-inner': 'drop-shadow(10px 16px 12px green)'
      },
      animation: {
        'slide-up': 'slideUp 1s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': {transform: 'translateY(100px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
      }
    }
  },
  plugins: [
      require('daisyui'),
  ],
};