const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
    ],

    theme: {
        extend: {},
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                md: '1rem',
                lg: '2rem',
                xl: '2rem',
            }
        }
    },
    plugins: [require('tw-elements/dist/plugin')],
});