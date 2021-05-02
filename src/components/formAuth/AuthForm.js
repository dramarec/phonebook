import React, { useState, useEffect } from 'react';
import styles from './Auth.form.module.css';
import Layout from '../layout/Layout';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    signInOperations,
    signUpOperations,
} from '../../redux/auth/authOperations';
import { NoticeError } from '../natification/Natification';
import authActions from '../../redux/auth/authActions';

const initialState = {
    name: '',
    email: '',
    password: '',
};
const AuthForm = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [state, setState] = useState({ ...initialState });
    const error = useSelector(state => state.auth.error);

    useEffect(() => {
        setTimeout(() => {
            dispatch(authActions.setError(''));
        }, 2500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);
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
            {error && <NoticeError />}

            <form onSubmit={onHandleSubmit}>
                {location.pathname === '/signup' && (
                    <label>
                        Name
                        <input
                            className={styles.input}
                            type="text"
                            value={state.name}
                            name="name"
                            onChange={onHadleChange}
                            placeholder="Name"
                        />
                    </label>
                )}

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
