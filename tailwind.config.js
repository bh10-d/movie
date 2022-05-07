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
        md: '3rem',
        lg: '3rem',
        xl: '3rem',
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')],
}
