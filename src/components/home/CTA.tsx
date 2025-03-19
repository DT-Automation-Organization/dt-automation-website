import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Button } from '../common';

export const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Social Media Strategy?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands of businesses that are saving time and increasing engagement with DT Automation.
            Get started today and see the difference our platform can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/services"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              View Plans
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};