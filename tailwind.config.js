module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        // sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')],
}
