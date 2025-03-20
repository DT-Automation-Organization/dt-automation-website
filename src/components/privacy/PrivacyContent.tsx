import React from 'react';
import { Container } from '../common';
export const PrivacyContent: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
            <Container size="md">
                <div className="mx-auto prose prose-lg dark:prose-invert">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
                    <p className="mb-4">Last Updated: March 20, 2025</p>
                    <p className="mb-6">
                        This Privacy Policy describes how DT Automation ("we," "us," or "our") collects, uses, and shares information about you when you use our website, services, and applications (collectively, the "Services"), including our Facebook Reels Automation Tool.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide to Us</h3>
                    <p>
                        We collect information you provide directly to us when you:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Create or update your account</li>
                        <li>Fill out a form on our website</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Contact customer support</li>
                        <li>Use our social media automation tools</li>
                        <li>Connect your social media accounts</li>
                        <li>Upload video content</li>
                        <li>Schedule posts</li>
                        <li>Make a payment</li>
                        <li>Provide feedback</li>
                    </ul>
                    <p>
                        The types of information we may collect include your name, email address, postal address, phone number, payment information, social media credentials (via OAuth tokens and access tokens), Facebook Page IDs, video content, scheduling preferences, and any other information you choose to provide.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect Automatically</h3>
                    <p>
                        When you use our Services, we automatically collect certain information, including:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>
                            <strong>Log Information:</strong> We collect log information when you use our Services, including access times, pages viewed, IP address, browser type, and the webpage you visited before navigating to our Services.
                        </li>
                        <li>
                            <strong>Device Information:</strong> We collect information about the device you use to access our Services, including hardware model, operating system and version, unique device identifiers, and mobile network information.
                        </li>
                        <li>
                            <strong>Usage Information:</strong> We collect information about your usage of our Services, such as the features you use, the actions you take, upload statistics, scheduling patterns, and the time, frequency, and duration of your activities.
                        </li>
                        <li>
                            <strong>Upload Performance:</strong> We collect information about the performance of your video uploads, including success rates, processing times, and error logs.
                        </li>
                        <li>
                            <strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar technologies to collect information about your interactions with our Services and other websites. For more information, please see our Cookie Policy.
                        </li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Provide, maintain, and improve our Services</li>
                        <li>Enable Facebook Reels uploading and scheduling</li>
                        <li>Process and track your social media content uploads</li>
                        <li>Save and manage your upload schedules and preferences</li>
                        <li>Process transactions and send related information</li>
                        <li>Send you technical notices, updates, security alerts, and administrative messages</li>
                        <li>Respond to your comments, questions, and requests</li>
                        <li>Provide customer service and support</li>
                        <li>Send you marketing communications about products, services, offers, and events</li>
                        <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                        <li>Track upload success rates and optimize our API integration</li>
                        <li>Detect, investigate, and prevent fraud and other illegal activities</li>
                        <li>Personalize and improve the Services</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">How We Share Your Information</h2>
                    <p>
                        We may share your information in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>
                            <strong>With Service Providers:</strong> We share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
                        </li>
                        <li>
                            <strong>With Social Media Platforms:</strong> When you use our Facebook Reels Automation Tool, we share your video content, descriptions, scheduling preferences, and other necessary information with Facebook to provide our Services. This requires the use of your Facebook access tokens and Page IDs.
                        </li>
                        <li>
                            <strong>For Legal Reasons:</strong> We may disclose information if we believe that disclosure is necessary to comply with any applicable law, regulation, legal process, or governmental request.
                        </li>
                        <li>
                            <strong>In Connection with Business Transfers:</strong> We may share information in connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business.
                        </li>
                        <li>
                            <strong>With Your Consent:</strong> We may share information with your consent or at your direction.
                        </li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Data Storage</h2>
                    <p>
                        Our Services create and store local files including:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Upload schedules in JSON format</li>
                        <li>Upload progress tracking</li>
                        <li>Upload results and statistics</li>
                        <li>Error logs</li>
                    </ul>
                    <p>
                        These files are used to maintain your upload progress and preferences, especially when resuming interrupted operations.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Facebook API Usage</h2>
                    <p>
                        Our Services use Facebook's API to:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Initialize video uploads</li>
                        <li>Upload video content</li>
                        <li>Check upload status</li>
                        <li>Publish or schedule content</li>
                        <li>Apply privacy settings</li>
                    </ul>
                    <p>
                        When using our Service, you agree to Facebook's Terms of Service and acknowledge that your content will be subject to Facebook's policies.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
                    <p>
                        We retain your information for as long as necessary to provide the Services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. This includes:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Upload schedules and history</li>
                        <li>Video metadata</li>
                        <li>Access tokens (securely stored)</li>
                        <li>Performance metrics and logs</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Your Choices</h2>
                    <p>
                        You have several choices regarding your information:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>
                            <strong>Account Information:</strong> You may update or correct your account information at any time by logging into your account.
                        </li>
                        <li>
                            <strong>Access Tokens:</strong> You can revoke access to your Facebook account at any time through your Facebook settings.
                        </li>
                        <li>
                            <strong>Schedule Management:</strong> You can interrupt, modify, or cancel your upload schedules at any time.
                        </li>
                        <li>
                            <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually set your browser to remove or reject cookies.
                        </li>
                        <li>
                            <strong>Marketing Communications:</strong> You may opt out of receiving promotional communications by following the instructions in those messages or by contacting us.
                        </li>
                        <li>
                            <strong>Data Access, Correction, and Deletion:</strong> You may request access to, correction of, or deletion of your information by contacting us.
                        </li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">API Rate Limits</h2>
                    <p>
                        Our Services are designed to comply with Facebook's API rate limits, which currently allow:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Up to 30 reels uploads per day</li>
                        <li>Specific intervals between API calls to prevent overwhelming the API</li>
                    </ul>
                    <p>
                        We implement these limits to maintain service quality and comply with platform policies.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
                    <p>
                        We take reasonable measures to help protect your information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. This includes secure storage of access tokens and other sensitive information. However, no security system is impenetrable, and we cannot guarantee the security of your information.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">International Data Transfers</h2>
                    <p>
                        We may transfer your information to countries other than the one in which you live. We deploy appropriate safeguards to protect your information when transferred internationally.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
                    <p>
                        Our Services are not directed to children under the age of 13. We do not knowingly collect information from children under 13. If we learn that we have collected information from a child under 13, we will take steps to delete such information.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
                    </p>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p>
                        <strong>DT Automation</strong><br />
                        Email: baymax.contact@gmail.com<br />
                        Address: Ha Noi, Viet Nam
                    </p>
                </div>
            </Container>
        </section>
    );
};