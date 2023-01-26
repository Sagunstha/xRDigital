import React from 'react';
import Home from '../pages/Home';
import TestPage from '../pages/TestPage';

const routes = [
    {
        route: '/home',
        title: 'Home',
        name: 'Home',
        element: <Home />,
    },
    {
        route: '/testpage',
        title: 'Home',
        name: 'Home',
        element: <TestPage />,
    },
];

export default routes;
