import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEO } from './SEO';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'DT Automation - Social Media Automation Services',
  description = 'DT Automation provides automation tools and services for social media platforms to enhance productivity and engagement.',
}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};