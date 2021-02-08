import React, { useState } from 'react';
const initialState = {
    email: '',
    password: '',
};

const AuthForm = () => {
    const [state, setState] = useState({ ...initialState });
    const onHadleChange = e => {
        const { name, email } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    };
    const onHandleSubmit = e => {
        e.preventDefault();
        console.log(state);
    };
    return (
        <form onSubmit={onHandleSubmit}>
            <label>
                Email
                <input
                    type="text"
                    value={state.email}
                    name="email"
                    onChange={onHadleChange}
                />
            </label>
            <label>
                Password
                <input
                    type="text"
                    value={state.password}
                    name="password"
                    onChange={onHandleSubmit}
                />
            </label>
            <button type="submit">
                {location.pathname === '/signUp' ? 'SignUp' : 'SignIn'}
            </button>
        </form>
    );
};

export default AuthForm;
