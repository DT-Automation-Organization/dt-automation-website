/**
 * Contact form data
 */
export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    company?: string;
    phone?: string;
}

/**
 * Newsletter subscription form data
 */
export interface NewsletterFormData {
    email: string;
    name?: string;
    preferences?: string[];
}

/**
 * Demo request form data
 */
export interface DemoRequestFormData {
    name: string;
    email: string;
    company: string;
    phone?: string;
    message?: string;
    preferredDate?: string;
    preferredTime?: string;
}

/**
 * Login form data
 */
export interface LoginFormData {
    email: string;
    password: string;
    rememberMe?: boolean;
}

/**
 * Registration form data
 */
export interface RegistrationFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
    newsletter?: boolean;
}

/**
 * Password reset request form data
 */
export interface PasswordResetRequestData {
    email: string;
}

/**
 * Password reset form data
 */
export interface PasswordResetFormData {
    password: string;
    confirmPassword: string;
    token: string;
}

/**
 * Profile update form data
 */
export interface ProfileUpdateFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    bio?: string;
    avatar?: File;
}

/**
 * Form validation error type
 */
export interface ValidationErrors {
    [key: string]: string;
}

/**
 * Form submission state
 */
export interface FormState {
    isSubmitting: boolean;
    isSubmitted: boolean;
    isSuccess: boolean;
    errors: ValidationErrors;
    message?: string;
}

/**
 * Form field props
 */
export interface FormFieldProps {
    id: string;
    name: string;
    label: string;
    value: string | number | boolean | Date;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    error?: string;
    touched?: boolean;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
}

/**
 * Select field option
 */
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}