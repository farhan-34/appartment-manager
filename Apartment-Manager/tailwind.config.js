module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: '#00BCD4',
                secondary: '',
                disabled: '',
                active: '#04c4c4'
            }
        },

    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}