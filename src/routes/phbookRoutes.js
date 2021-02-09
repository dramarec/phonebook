import { lazy } from 'react';

export const phbookRoutes = [
    {
        path: '/home',
        name: 'Home',
        exact: true,
        component: lazy(() =>
            import('../pages/home/HomePage' /* webpackChunkName: "Home" */),
        ),
    },
    {
        path: '/register',
        name: 'Register',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/registration/RegistrationPage' /* webpackChunkName: "Register" */
            ),
        ),
    },
    {
        path: '/login',
        name: 'Login',
        exact: true,
        component: lazy(() =>
            import('../pages/login/LoginPage' /* webpackChunkName: "Login" */),
        ),
    },
    {
        path: '/contacts',
        name: 'Contacts',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/contacts/ContactsPage' /* webpackChunkName: "Contacts" */
            ),
        ),
    },
    // {
    //     path: '/home',
    //     name: 'Home',
    //     exact: true,
    //     component: lazy(() =>
    //         import('../pages/home/HomePage' /* webpackChunkName: "Home" */),
    //     ),
    // },
    // {
    //     path: '/register',
    //     name: 'Register',
    //     exact: true,
    //     component: lazy(() =>
    //         import(
    //             '../components/auth/AuthForm' /* webpackChunkName: "Register" */
    //         ),
    //     ),
    // },
    // {
    //     path: '/login',
    //     name: 'Login',
    //     exact: true,
    //     component: lazy(() =>
    //         import(
    //             '../components/login/LoginForm' /* webpackChunkName: "Login" */
    //         ),
    //     ),
    // },
    // {
    //     path: '/contacts',
    //     name: 'Contacts',
    //     exact: true,
    //     component: lazy(() =>
    //         import(
    //             '../components/phonebook/Phonebook' /* webpackChunkName: "Contacts" */
    //         ),
    //     ),
    // },
];
