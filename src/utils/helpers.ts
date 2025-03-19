/**
 * Format date to a readable string
 * @param date Date to format
 * @param locale Locale to use for formatting
 * @returns Formatted date string
 */
export const formatDate = (date: Date | string, locale = 'en-US'): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

/**
 * Format currency amount
 * @param amount Amount to format
 * @param currency Currency code
 * @param locale Locale to use for formatting
 * @returns Formatted currency string
 */
export const formatCurrency = (
    amount: number,
    currency = 'USD',
    locale = 'en-US'
): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(amount);
};

/**
 * Truncate text to a specified length and add ellipsis
 * @param text Text to truncate
 * @param maxLength Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
};

/**
 * Convert string to kebab case (useful for URLs, IDs, etc.)
 * @param text Text to convert
 * @returns Text in kebab-case
 */
export const toKebabCase = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
};

/**
 * Get initials from a name
 * @param name Full name
 * @param limit Maximum number of characters to return
 * @returns Initials
 */
export const getInitials = (name: string, limit = 2): string => {
    return name
        .split(' ')
        .map(part => part.charAt(0).toUpperCase())
        .slice(0, limit)
        .join('');
};

/**
 * Debounce a function call
 * @param func Function to debounce
 * @param wait Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => void>(
    func: T,
    wait = 300
): ((...args: Parameters<T>) => void) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function (this: any, ...args: Parameters<T>) {
        const context = this;

        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
        }, wait);
    };
};

/**
 * Check if an email is valid
 * @param email Email to validate
 * @returns Whether the email is valid
 */
export const isValidEmail = (email: string): boolean => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
};

/**
 * Get random item from array
 * @param array Array to get item from
 * @returns Random item from array
 */
export const getRandomItem = <T>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
};

/**
 * Shuffle array (Fisher-Yates algorithm)
 * @param array Array to shuffle
 * @returns New shuffled array
 */
export const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

/**
 * Create a slug from text (for URLs)
 * @param text Text to convert to slug
 * @returns URL-friendly slug
 */
export const createSlug = (text: string): string => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

/**
 * Get viewport dimensions
 * @returns Object with viewport width and height
 */
export const getViewport = (): { width: number; height: number } => {
    return {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight,
    };
};

/**
 * Check if element is in viewport
 * @param element Element to check
 * @param offset Optional offset to consider element in viewport earlier
 * @returns Whether the element is in viewport
 */
export const isInViewport = (
    element: HTMLElement,
    offset = 0
): boolean => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.bottom >= 0 - offset &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) + offset &&
        rect.right >= 0 - offset
    );
};