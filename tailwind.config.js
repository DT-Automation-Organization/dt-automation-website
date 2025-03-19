module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6f1ff',
                    100: '#cce3ff',
                    200: '#99c8ff',
                    300: '#66acff',
                    400: '#3391ff',
                    500: '#0075ff',
                    600: '#005ecc',
                    700: '#004799',
                    800: '#002f66',
                    900: '#001833',
                },
                secondary: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                },
                dark: '#141d2b',
                light: '#ffffff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            boxShadow: {
                card: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                button: '0 4px 6px -1px rgba(0, 117, 255, 0.1), 0 2px 4px -1px rgba(0, 117, 255, 0.06)',
            },
        },
    },
    plugins: [],
}
