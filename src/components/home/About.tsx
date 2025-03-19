import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Button } from '../common';

export const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.7 }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About DT Automation</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            DT Automation is a leading provider of social media automation tools designed to help businesses
                            boost their online presence, increase engagement, and save valuable time.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Founded in 2023, our team brings together expertise in social media marketing, software development,
                            and AI to create powerful, yet user-friendly automation solutions.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            Our mission is to empower businesses of all sizes with enterprise-grade tools that streamline
                            their social media workflows and maximize impact across platforms.
                        </p>
                        <Button
                            variant="primary"
                            href="/about"
                        >
                            Learn More About Us
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative">
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-500 rounded-full opacity-20"></div>
                            <img
                                src="/images/team.png"
                                alt="About DT Automation"
                                className="rounded-xl shadow-xl w-full h-auto relative z-10"
                            />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default About;
