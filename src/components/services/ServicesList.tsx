import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Card, Button } from '../common';

interface Service {
    id: number;
    title: string;
    description: string;
    features: string[];
    image: string;
    icon: React.ReactNode;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Social Media Automation',
        description: 'Streamline your social media management with our comprehensive automation tools. Schedule posts, manage multiple platforms, and maintain a consistent presence with minimal effort.',
        features: [
            'Multi-platform posting',
            'Content calendar',
            'Optimal posting time suggestions',
            'Bulk scheduling',
            'Post preview and editing'
        ],
        image: '/images/services/automation.png',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Content Scheduling',
        description: 'Plan and schedule your content in advance with our intuitive calendar interface. Create content pipelines and ensure consistent posting across all your social channels.',
        features: [
            'Drag-and-drop calendar',
            'Content categories',
            'Custom posting schedules',
            'Content recycling',
            'Campaign planning tools'
        ],
        image: '/images/services/scheduling.png',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Analytics & Reporting',
        description: 'Gain valuable insights with our comprehensive analytics and reporting tools. Track performance, measure engagement, and optimize your strategy with data-driven decisions.',
        features: [
            'Cross-platform analytics',
            'Custom report creation',
            'Engagement metrics',
            'Audience insights',
            'Performance comparisons'
        ],
        image: '/images/services/analytics.png',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Engagement Automation',
        description: 'Automatically engage with your audience through intelligent responders. Manage comments, direct messages, and mentions across your social platforms.',
        features: [
            'Comment management',
            'Automated responses',
            'Sentiment analysis',
            'Priority inbox',
            'Engagement workflows'
        ],
        image: '/images/services/engagement.png',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'Content Creation Tools',
        description: 'Create engaging content with our suite of design and creation tools. Generate visuals, captions, and hashtags to maximize your social media impact.',
        features: [
            'Image editing',
            'Caption suggestions',
            'Hashtag research',
            'Content templates',
            'Brand style guides'
        ],
        image: '/images/services/content-creation.png',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: 6,
        title: 'Custom Integrations',
        description: 'Connect our platform with your existing tools and workflows. We offer custom integrations to ensure seamless operation with your preferred software ecosystem.',
        features: [
            'CRM integrations',
            'E-commerce connections',
            'Custom API development',
            'Workflow automation',
            'Data synchronization'
        ],
        image: '/images/services/integrations.png',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
        ),
    },
];

export const ServicesList: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Services</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Explore our comprehensive suite of social media automation services designed to save time, increase engagement, and maximize your online presence.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div key={service.id} variants={itemVariants}>
                            <Card hoverable className="h-full flex flex-col">
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-primary-500 text-white py-1 px-3 rounded-full text-sm font-medium">
                                            Service
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
                                    <ul className="mb-4 space-y-2">
                                        {service.features.slice(0, 3).map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-700 dark:text-gray-200">
                                                <svg className="w-4 h-4 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant="outline"
                                        href={`/services#service-${service.id}`}
                                        className="w-full mt-auto"
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};