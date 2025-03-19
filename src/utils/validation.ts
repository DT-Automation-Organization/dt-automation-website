import { VALIDATION_MESSAGES } from './constants';

interface ValidationRules {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    email?: boolean;
    pattern?: RegExp;
    match?: string;
    custom?: (value: any) => string | undefined;
}

interface ValidationResult {
    [key: string]: string | undefined;
}

/**
 * Validate a form value based on specified rules
 * @param value Value to validate
 * @param rules Validation rules to apply
 * @param formValues All form values (for matching fields)
 * @returns Error message or undefined if valid
 */
export const validateField = (
    value: any,
    rules: ValidationRules,
    formValues?: Record<string, any>
): string | undefined => {
    // Required validation
    if (rules.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
        return VALIDATION_MESSAGES.required;
    }

    // Skip other validations if value is empty and not required
    if (!value && typeof value !== 'boolean') {
        return undefined;
    }

    // String validations (only apply to string values)
    if (typeof value === 'string') {
        // Minimum length
        if (rules.minLength !== undefined && value.length < rules.minLength) {
            return VALIDATION_MESSAGES.minLength(rules.minLength);
        }

        // Maximum length
        if (rules.maxLength !== undefined && value.length > rules.maxLength) {
            return VALIDATION_MESSAGES.maxLength(rules.maxLength);
        }

        // Email format
        if (rules.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return VALIDATION_MESSAGES.email;
        }

        // Pattern matching
        if (rules.pattern && !rules.pattern.test(value)) {
            return `Invalid format`;
        }

        // Match another field (e.g., password confirmation)
        if (rules.match && formValues && value !== formValues[rules.match]) {
            return `Does not match ${rules.match}`;
        }
    }

    // Custom validation function
    if (rules.custom) {
        return rules.custom(value);
    }

    // Validation passed
    return undefined;
};

/**
 * Validate an entire form
 * @param values Form values
 * @param validationSchema Validation schema with rules for each field
 * @returns Object with error messages by field name
 */
export const validateForm = (
    values: Record<string, any>,
    validationSchema: Record<string, ValidationRules>
): ValidationResult => {
    const errors: ValidationResult = {};

    for (const field in validationSchema) {
        if (Object.prototype.hasOwnProperty.call(validationSchema, field)) {
            const value = values[field];
            const rules = validationSchema[field];
            const error = validateField(value, rules, values);

            if (error) {
                errors[field] = error;
            }
        }
    }

    return errors;
};

/**
 * Common validation schemas
 */
export const VALIDATION_SCHEMAS = {
    contact: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 100,
        },
        email: {
            required: true,
            email: true,
        },
        subject: {
            required: true,
            minLength: 3,
            maxLength: 150,
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 1000,
        },
    },
    login: {
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            minLength: 8,
        },
    },
    registration: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 100,
        },
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            minLength: 8,
            custom: (value: string) => {
                if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
                    return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
                }
                return undefined;
            },
        },
        confirmPassword: {
            required: true,
            match: 'password',
        },
    },
};