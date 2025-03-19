import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../common';

export const Hero: React.FC = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white z-10"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Automate Your Social Media Presence
                        </h1>
                        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
                            DT Automation provides powerful tools to automate your social media workflow,
                            increase engagement, and save time with our intelligent automation solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                href="/services"
                                className="border-white text-white hover:bg-white hover:text-primary-500"
                            >
                                Explore Services
                            </Button>
                            <Button
                                variant="primary"
                                size="lg"
                                href="/contact"
                                className="bg-white text-primary-500 hover:bg-gray-100"
                            >
                                Get Started
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <img
                            src="/images/hero-illustration.svg"
                            alt="DT Automation Platform"
                            className="w-full h-auto max-w-lg mx-auto"
                        />
                    </motion.div>
                </div>
            </Container>

            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};
