import React from 'react';
import { Mission, Values, Team } from '../components/about';
import { CTA } from '../components/home';

const About: React.FC = () => {
    return (
        <>
            <Mission />
            <Values />
            <Team />
            <CTA />
        </>
    );
};

export default About;