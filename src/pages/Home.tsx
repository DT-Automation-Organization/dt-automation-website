import React from 'react';
import { Hero, Features, Services, CTA } from '../components/home';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <CTA />
    </>
  );
};

export default Home;