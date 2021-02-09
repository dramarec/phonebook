import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import Container from '../../components/layout/container/Container';

const RegistrationPage = () => {
    return (
        <Container>
            <h2>Registration</h2>
            <AuthForm />
        </Container>
    );
};

export default RegistrationPage;
