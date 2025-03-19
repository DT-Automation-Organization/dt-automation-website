import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Button } from '../common';

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Social Media Automation',
        description: 'Automate your posting schedule, engagement, and content distribution across multiple platforms to maintain a consistent presence.',
        image: '/images/services/automation.png',
    },
    {
        id: 2,
        title: 'Analytics & Reporting',
        description: 'Gain valuable insights with comprehensive analytics and customizable reports to track performance and optimize your strategy.',
        image: '/images/services/analytics.png',
    },
    {
        id: 3,
        title: 'Content Management',
        description: 'Simplify content creation, curation, and scheduling with our intuitive tools designed to streamline your workflow.',
        image: '/images/services/content-creation.png',
    },
];

export const Services: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Comprehensive solutions to enhance your social media presence and drive engagement
                        </p>
                    </motion.div>
                </div>

                <div ref={ref} className="space-y-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:grid-flow-dense'
                                } gap-12 items-center`}
                        >
                            <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-transparent opacity-60"></div>
                                </div>
                            </div>

                            <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                                    {service.description}
                                </p>
                                <Button
                                    variant="primary"
                                    href="/services"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        variant="outline"
                        href="/services"
                        size="lg"
                    >
                        View All Services
                    </Button>
                </div>
            </Container>
        </section>
    );
};
