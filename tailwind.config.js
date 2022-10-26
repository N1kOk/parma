/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './src/App.vue',
    ],
    theme: {
        extend: {
            colors: {
                'black-500': '#293240',
                'red-500': '#EC1C24',
                'red': '#F00',
                'gray': '#898B8D',
            },
            flex: {
                '2': '1 1 50%',
                '3': '1 1 33.33%',
                '4': '1 1 25%',
            },
        },
        screens: {
            'sm': '576px',
            'md': '1160px',
            'lg': '1440px',
        },
    },
    plugins: [],
}
