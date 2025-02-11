/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], theme: {
        extend: {
            fontFamily: {
                Raleway: ['Raleway'],
            },
            screens: {
                'sm': '320px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1920px',
            },
        },
    },
    plugins: [
        function ({addVariant}) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
}

