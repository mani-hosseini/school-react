/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
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
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        },
        function ({ addComponents }) {
            addComponents({
                '.custom-box': {
                    padding: '50px',
                    backgroundColor: 'white',
                    marginTop: '68px',
                    marginBottom: '68px',
                    boxShadow: '5px 5px 0px 0px rgba(0,0,0,1)',
                    borderWidth: '2px',
                    borderColor: '#262626',
                    borderRadius: '12px',
                },
            });
        },
    ],
}
