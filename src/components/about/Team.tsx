import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../common';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    social: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'David Tran',
        role: 'Founder & CEO',
        bio: 'David founded DT Automation with a vision to transform how businesses engage with social media. With over 10 years of experience in software development and automation, he leads our strategic direction.',
        image: '/images/team/team-1.png',
        social: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
        },
    },
    {
        id: 2,
        name: 'Minh Nguyen',
        role: 'CTO',
        bio: 'Minh oversees our technical strategy and development. With a background in AI and machine learning, he ensures our automation tools leverage cutting-edge technology to deliver exceptional results.',
        image: '/images/team/team-2.png',
        social: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
        },
    },
    {
        id: 3,
        name: 'Linh Pham',
        role: 'Head of Product',
        bio: 'Linh drives our product roadmap and user experience. Her deep understanding of social media landscapes and client needs helps shape intuitive, powerful solutions.',
        image: '/images/team/team-3.png',
        social: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
        },
    },
    {
        id: 4,
        name: 'Tuan Anh',
        role: 'Lead Developer',
        bio: 'Tuan leads our development team, architecting robust, scalable solutions. His expertise in cloud infrastructure and API integrations is fundamental to our platform stability.',
        image: '/images/team/team-4.png',
        social: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
        },
    },
];

export const Team: React.FC = () => {
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Team</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Meet the talented individuals behind DT Automation. Our diverse team combines expertise in technology,
                        social media, and business to deliver exceptional solutions.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {teamMembers.map((member) => (
                        <motion.div key={member.id} variants={itemVariants}>
                            <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative overflow-hidden pb-[100%]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="absolute top-0 left-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                                    <p className="text-primary-500 font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{member.bio}</p>

                                    <div className="flex space-x-3">
                                        {member.social.linkedin && (
                                            <a
                                                href={member.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gray-100 dark:bg-gray-600 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                                aria-label={`${member.name}'s LinkedIn`}
                                            >
                                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                        )}
                                        {member.social.twitter && (
                                            <a
                                                href={member.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gray-100 dark:bg-gray-600 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                                aria-label={`${member.name}'s Twitter`}
                                            >
                                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </a>
                                        )}
                                        {member.social.github && (
                                            <a
                                                href={member.social.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gray-100 dark:bg-gray-600 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                                aria-label={`${member.name}'s GitHub`}
                                            >
                                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};