import React from 'react';
import FeedbackForm from '../pages/feedbackform/FeedbackForm';
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
    {
        route: '/feedbackform',
        title: 'Feedbackform',
        name: 'Feedbackform',
        element: <FeedbackForm />,
    },
];

export default routes;
