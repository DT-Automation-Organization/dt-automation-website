import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Card, Button } from '../common';

interface PricingPlan {
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
    {
        id: 'basic',
        name: 'Basic',
        price: '$49',
        description: 'Perfect for individuals and small businesses getting started with social media.',
        features: [
            'Schedule up to 50 posts per month',
            'Connect 3 social platforms',
            'Basic analytics dashboard',
            'Content calendar',
            'Email support',
        ],
    },
    {
        id: 'pro',
        name: 'Professional',
        price: '$99',
        description: 'Ideal for growing businesses and content creators.',
        features: [
            'Schedule unlimited posts',
            'Connect 8 social platforms',
            'Advanced analytics and reporting',
            'Content calendar with team collaboration',
            'Engagement automation',
            'Priority email support',
            'API access',
        ],
        popular: true,
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom',
        description: 'Tailored solutions for agencies and large organizations.',
        features: [
            'All Professional features',
            'Unlimited social platforms',
            'Custom integrations',
            'Dedicated account manager',
            'Phone support',
            'Custom analytics',
            'Team training and onboarding',
        ],
    },
];

export const ServiceDetail: React.FC = () => {
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
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Pricing Plans</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Choose the plan that fits your needs. All plans include access to our core automation features.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {pricingPlans.map((plan) => (
                        <motion.div key={plan.id} variants={itemVariants}>
                            <Card
                                className={`h-full flex flex-col ${plan.popular ? 'border-2 border-primary-500 dark:border-primary-400' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="bg-primary-500 text-white text-center py-2 font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                                        {plan.id !== 'enterprise' && <span className="text-gray-500 dark:text-gray-400">/month</span>}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>

                                    <div className="mb-8 flex-grow">
                                        <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Features</h4>
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg className="w-5 h-5 mr-2 text-primary-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Button
                                        variant={plan.popular ? 'primary' : 'outline'}
                                        href="/contact"
                                        className="w-full"
                                    >
                                        {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Need a custom solution? Contact our sales team for a personalized quote.
                    </p>
                    <Button
                        variant="text"
                        href="/contact"
                    >
                        Contact Sales
                    </Button>
                </div>
            </Container>
        </section>
    );
};