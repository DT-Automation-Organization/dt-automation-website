/**
 * Theme type
 */
export type ThemeType = 'light' | 'dark';

/**
 * Social media platform type
 */
export type SocialPlatform = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'pinterest';

/**
 * Social media link
 */
export interface SocialLink {
    platform: SocialPlatform;
    url: string;
    icon?: React.ReactNode;
}

/**
 * Navigation item
 */
export interface NavItem {
    name: string;
    path: string;
    isExternal?: boolean;
    children?: NavItem[];
}

/**
 * Hero section props
 */
export interface HeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    image?: string;
    imageAlt?: string;
    backgroundColor?: string;
}

/**
 * Feature item
 */
export interface Feature {
    id: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
}

/**
 * Testimonial
 */
export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar?: string;
    rating?: number;
}

/**
 * Team member
 */
export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    social?: {
        linkedin?: string;
        twitter?: string;
        github?: string;
        [key: string]: string | undefined;
    };
}

/**
 * Service
 */
export interface Service {
    id: number;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription?: string;
    features: string[];
    icon?: React.ReactNode;
    image: string;
}

/**
 * Pricing plan
 */
export interface PricingPlan {
    id: string;
    name: string;
    price: string;
    billingPeriod: 'monthly' | 'yearly';
    description: string;
    features: string[];
    isPopular?: boolean;
    buttonText?: string;
    buttonLink?: string;
}

/**
 * FAQ item
 */
export interface FAQItem {
    question: string;
    answer: string;
}

/**
 * Blog post
 */
export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    author: {
        name: string;
        avatar?: string;
    };
    categories: string[];
    tags: string[];
    publishedAt: Date | string;
    readTime: number; 
}

/**
 * API Error
 */
export interface ApiError {
    code: string;
    message: string;
    status: number;
    details?: any;
}

/**
 * API Response
 */
export interface ApiResponse<T> {
    data?: T;
    error?: ApiError;
    success: boolean;
}

/**
 * Metadata for SEO
 */
export interface SEOMetadata {
    title: string;
    description: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    twitterCardType?: 'summary' | 'summary_large_image';
}