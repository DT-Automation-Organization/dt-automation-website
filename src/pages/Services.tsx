import React from 'react';
import { ServicesList, ServiceDetail } from '../components/services';
import { CTA } from '../components/home';

const Services: React.FC = () => {
    return (
        <>
            <ServicesList />
            <ServiceDetail />
            <CTA />
        </>
    );
};

export default Services;