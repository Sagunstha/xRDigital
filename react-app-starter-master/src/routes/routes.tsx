import React from 'react';
import LoginForm from '../pages/login/Login';
import SignupForm from '../pages/signup/Signup';

const routes = [
    {
        route: '/login',
        title: 'Login',
        name: 'Login',
        element: <LoginForm />,
    },
    {
        route: '/signup',
        title: 'Signup',
        name: 'Signup',
        element: <SignupForm />,
    },
];

export default routes;
