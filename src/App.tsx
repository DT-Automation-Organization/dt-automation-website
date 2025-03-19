import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/common';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import { useScrollToTop } from './hooks/useScrollToTop';

const App: React.FC = () => {
    useScrollToTop();

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </Layout>
    );
};

export default App;