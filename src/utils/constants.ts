export const COMPANY_INFO = {
    name: 'DT Automation',
    email: 'baymax.contact@gmail.com',
    phone: '+84 123 456 789',
    address: 'Ha Noi, Viet Nam',
    socialMedia: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
    },
};

export const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
];

export const FEATURES = [
    {
        id: 'automation',
        title: 'Smart Automation',
        description: 'Automate your social media workflow with intelligent scheduling and content management.',
        icon: 'automation',
    },
    {
        id: 'analytics',
        title: 'Powerful Analytics',
        description: 'Track performance and measure engagement with comprehensive analytics tools.',
        icon: 'analytics',
    },
    {
        id: 'engagement',
        title: 'Engagement Tools',
        description: 'Interact with your audience efficiently through automated responses and engagement tracking.',
        icon: 'engagement',
    },
    {
        id: 'integrations',
        title: 'Platform Integrations',
        description: 'Connect with all major social media platforms and third-party applications.',
        icon: 'integrations',
    },
];

export const VALIDATION_MESSAGES = {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    minLength: (length: number) => `Must be at least ${length} characters`,
    maxLength: (length: number) => `Cannot exceed ${length} characters`,
    phone: 'Please enter a valid phone number',
};

export const ERROR_MESSAGES = {
    generalError: 'An error occurred. Please try again.',
    networkError: 'Network error. Please check your internet connection.',
    authError: 'Authentication failed. Please try again.',
    formError: 'There was an error submitting the form. Please check your inputs and try again.',
};

export const API_ENDPOINTS = {
    contact: '/api/contact',
    newsletter: '/api/newsletter',
    auth: '/api/auth',
};

export const STORAGE_KEYS = {
    theme: 'dt-automation-theme',
    language: 'dt-automation-language',
    authToken: 'dt-automation-auth-token',
};

export const THEME_SETTINGS = {
    light: {
        background: '#ffffff',
        text: '#141d2b',
        primary: '#0075ff',
        secondary: '#14b8a6',
    },
    dark: {
        background: '#141d2b',
        text: '#ffffff',
        primary: '#3391ff',
        secondary: '#2dd4bf',
    },
};

export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};