import React, { useState } from 'react';
import styles from './Auth.form.module.css';
import Layout from '../layout/Layout';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    signInOperations,
    signUpOperations,
} from '../../redux/auth/authOperations';

const initialState = {
    email: '',
    password: '',
};

const AuthForm = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    // console.log('location :', location);

    const [state, setState] = useState({ ...initialState });

    const onHadleChange = e => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    };

    const onHandleSubmit = e => {
        e.preventDefault();
        if (location.pathname === '/signup') {
            dispatch(signUpOperations(state));
        } else dispatch(signInOperations(state));
        setState({ ...initialState });
    };
    return (
        <Layout
            title={
                location.pathname === '/signup' ? 'Registration' : 'Login In'
            }
        >
            <form onSubmit={onHandleSubmit}>
                <label>
                    Email
                    <input
                        className={styles.input}
                        type="text"
                        value={state.email}
                        name="email"
                        onChange={onHadleChange}
                        placeholder="Email"
                    />
                </label>
                <label>
                    Password
                    <input
                        className={styles.input}
                        type="text"
                        value={state.password}
                        name="password"
                        onChange={onHadleChange}
                        placeholder="Password"
                    />
                </label>
                <button className={styles.button} type="submit">
                    {location.pathname === '/signup' ? 'Sign Up' : 'Sign In'}
                </button>
            </form>
        </Layout>
    );
};

export default AuthForm;
