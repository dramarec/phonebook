import React, { useState } from 'react';
import styles from './Auth.form.module.css';
import Layout from '../layout/Layout';

const initialState = {
    email: '',
    password: '',
};

const AuthForm = () => {
    const [state, setState] = useState({ ...initialState });
    const onHadleChange = e => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    };
    const onHandleSubmit = e => {
        e.preventDefault();
        console.log(state);
    };
    return (
        <Layout title="Register">
            <form onSubmit={onHandleSubmit}>
                <label>
                    Email
                    <input
                        className={styles.input}
                        type="text"
                        value={state.email}
                        name="email"
                        onChange={onHadleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        className={styles.input}
                        type="text"
                        value={state.password}
                        name="password"
                        onChange={onHandleSubmit}
                    />
                </label>
                <button className={styles.button} type="submit">
                    {/* {location.pathname === '/signUp' ? 'SignUp' : 'SignIn'} */}
                    Register
                </button>
            </form>
        </Layout>
    );
};

export default AuthForm;
