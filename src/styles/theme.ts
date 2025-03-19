export const lightTheme = {
    background: {
        primary: '#ffffff',
        secondary: '#f9fafb',
        tertiary: '#f3f4f6',
    },
    text: {
        primary: '#141d2b',
        secondary: '#4b5563',
        tertiary: '#6b7280',
    },
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
    },
    border: {
        default: '#e5e7eb',
        focus: '#0075ff',
    },
    shadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
};

export const darkTheme = {
    background: {
        primary: '#141d2b',
        secondary: '#1f2937',
        tertiary: '#374151',
    },
    text: {
        primary: '#f9fafb',
        secondary: '#e5e7eb',
        tertiary: '#d1d5db',
    },
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
    },
    border: {
        default: '#374151',
        focus: '#3391ff',
    },
    shadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.26)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.25)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.24)',
    },
};

export type ThemeType = typeof lightTheme;

export default { lightTheme, darkTheme };