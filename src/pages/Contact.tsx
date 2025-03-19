import React from 'react';
import { Container } from '../components/common';
import { ContactForm, ContactInfo } from '../components/contact';

const Contact: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Have questions or want to learn more about our services? We'd love to hear from you!
                        Fill out the form below and our team will get back to you soon.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <ContactForm />
                    </div>
                    <div>
                        <ContactInfo />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;