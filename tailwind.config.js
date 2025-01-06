module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-inner': 'drop-shadow(10px 16px 12px green)'
      },
    }
  },
  plugins: [
      require('daisyui'),
  ],
};