import React from 'react';
import LoginForm from '../../components/login/LoginForm';
import Container from '../../components/layout/container/Container';

const LoginPage = () => {
    return (
        <Container>
            <h2>Login</h2>
            <LoginForm />
        </Container>
    );
};

export default LoginPage;
