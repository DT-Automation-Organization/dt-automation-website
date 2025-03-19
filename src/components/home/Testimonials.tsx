import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../common';

interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    content: string;
    avatar: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        position: 'Marketing Director',
        company: 'TechCorp',
        content: "DT Automation transformed our social media strategy. We've seen a 35% increase in engagement and saved countless hours on content scheduling.",
        avatar: '/images/testimonials/testimonial-1.png',
        rating: 5,
    },
    {
        id: 2,
        name: 'Michael Chen',
        position: 'Social Media Manager',
        company: 'GrowthBrands',
        content: 'The analytics dashboard alone is worth the investment. I can now easily track performance across platforms and make data-driven decisions.',
        avatar: '/images/testimonials/testimonial-2.png',
        rating: 5,
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        position: 'CEO',
        company: 'StartupX',
        content: 'As a startup founder, I wear many hats. DT Automation has been invaluable in maintaining our social presence while I focus on growing the business.',
        avatar: '/images/testimonials/testimonial-3.png',
        rating: 4,
    },
];

export const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const renderStars = (rating: number) => {
        return Array(5).fill(0).map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover how DT Automation has helped businesses transform their social media presence.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/4">
                                <div className="rounded-full overflow-hidden w-24 h-24 mx-auto">
                                    <img
                                        src={testimonials[activeIndex].avatar}
                                        alt={testimonials[activeIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:w-3/4 text-center md:text-left">
                                <div className="flex justify-center md:justify-start mb-3">
                                    {renderStars(testimonials[activeIndex].rating)}
                                </div>
                                <blockquote className="text-xl italic mb-4 text-gray-700 dark:text-gray-200">
                                    "{testimonials[activeIndex].content}"
                                </blockquote>
                                <div>
                                    <p className="font-semibold text-lg text-gray-900 dark:text-white">
                                        {testimonials[activeIndex].name}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 -left-5 md:-left-10 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 -right-5 md:-right-10 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;