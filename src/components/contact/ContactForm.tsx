import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Button } from '../common';
import * as yup from 'yup';
interface ContactFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}
export const ContactForm: React.FC = () => {
    const initialValues: ContactFormValues = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };
    const validate = (values: ContactFormValues) => {
        const errors: Partial<Record<keyof ContactFormValues, string>> = {};
        if (!values.name) {
            errors.name = 'Name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.subject) {
            errors.subject = 'Subject is required';
        }
        if (!values.message) {
            errors.message = 'Message is required';
        } else if (values.message.length < 10) {
            errors.message = 'Message should be at least 10 characters';
        }
        return errors;
    };
    const handleSubmit = async (values: ContactFormValues) => {
        console.log('Form values:', values);
        await new Promise(resolve => setTimeout(resolve, 1000));
        resetForm();
        alert('Thank you for your message! We will get back to you soon.');
    };
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit: submitForm,
        resetForm,
    } = useForm({
        initialValues,
        onSubmit: handleSubmit,
        validate,
    });
    return (
        <form onSubmit={submitForm} className="space-y-6" noValidate>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border ${touched.name && errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                        } focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700`}
                    placeholder="Your name"
                />
                {touched.name && errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border ${touched.email && errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                        } focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700`}
                    placeholder="your.email@example.com"
                />
                {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border ${touched.subject && errors.subject
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                        } focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700`}
                    placeholder="Subject of your message"
                />
                {touched.subject && errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border ${touched.message && errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                        } focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700`}
                    placeholder="Your message..."
                ></textarea>
                {touched.message && errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
            </div>
            <div>
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </div>
        </form>
    );
};