import { lazy } from 'react';

export const phbookRoutes = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: lazy(() =>
            import('../pages/home/HomePage' /* webpackChunkName: "Home" */),
        ),
        isPrivate: false,
        restricted: false,
    },
    {
        path: '/signup',
        name: 'Registration',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/registration/RegistrationPage' /* webpackChunkName: "Register" */
            ),
        ),
        isPrivate: false,
        restricted: true,
    },
    {
        path: '/signin',
        name: 'Login In',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/registration/RegistrationPage' /* webpackChunkName: "Login" */
            ),
        ),
        isPrivate: false,
        restricted: true,
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
        isPrivate: true,
        restricted: false,
    },
];
