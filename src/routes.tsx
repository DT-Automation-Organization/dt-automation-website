import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/privacy',
        element: <Privacy />,
    },
];
export default routes;