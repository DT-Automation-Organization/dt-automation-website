import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../common';
export const Mission: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <section ref={ref} className="py-20 bg-white dark:bg-gray-800">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary-500 rounded-xl transform rotate-3"></div>
                        <img
                            src="/images/team.png"
                            alt="Our Mission"
                            className="relative z-10 rounded-xl shadow-lg"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            At DT Automation, our mission is to revolutionize how businesses engage with social media by providing
                            cutting-edge automation tools that save time, increase efficiency, and drive meaningful engagement.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            We believe that social media should be a powerful asset for every business, not a time-consuming burden.
                            Our goal is to empower organizations of all sizes to harness the full potential of their social media presence
                            through intelligent automation, data-driven insights, and innovative solutions.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            By automating routine tasks and optimizing content delivery, we help our clients focus on what truly matters:
                            creating authentic connections with their audience and growing their business.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
