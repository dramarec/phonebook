import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import styles from './Auth.form.module.css';

class AuthForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    // onHadleChange = ({ target: { name, value } }) => {
    //     this.setState(prev => ({ [name]: value }));
    // };
    onHadleChange = e => {
        const { name, value } = e.target;
        this.setState(prev => ({ [name]: value }));
    };
    onHandleSubmit = e => {
        e.preventDefault();
        // console.log('this.state', this.state);
        this.props.onRegister({ ...this.state });
    };
    render() {
        const { name, password, email } = this.state;
        return (
            <form onSubmit={this.onHandleSubmit}>
                <label>
                    Name
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onHadleChange}
                    />
                </label>
                <label>
                    Email
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.onHadleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        className={styles.input}
                        type="text"
                        name="password"
                        value={password}
                        onChange={this.onHadleChange}
                    />
                </label>
                <button className={styles.button} type="submit">
                    {/* {location.pathname === '/signUp' ? 'SignUp' : 'SignIn'} */}
                    Register
                </button>
            </form>
        );
    }
}

export default connect(null, { onRegister: authOperations.register })(AuthForm);
// ===================================
// hooks
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// const initialState = {
//     name: "",
//     email: "",
//     password: "",
// };

// const AuthForm = () => {
//     const location = useLocation();
//     const [state, setState] = useState({ ...initialState });
//     const onHadleChange = (e) => {
//         const { name, value } = e.target;
//         setState((prev) => ({ ...prev, [name]: value }));
//     };
//     const onHandleSubmit = (e) => {
//         e.preventDefault();
//         console.log(state);
//     };
//     return (
//         <form onSubmit={onHandleSubmit}>
//             <label>
//                 Name
//                 <input
//                     type="text"
//                     value={state.name}
//                     name="name"
//                     onChange={onHadleChange}
//                 />
//             </label>
//             <label>
//                 Email
//                 <input
//                     type="text"
//                     value={state.email}
//                     name="email"
//                     onChange={onHadleChange}
//                 />
//             </label>
//             <label>
//                 Password
//                 <input
//                     type="text"
//                     value={state.password}
//                     name="password"
//                     onChange={onHandleSubmit}
//                 />
//             </label>
//             <button type="submit">
//                 {location.pathname === "/signUp" ? "SignUp" : "SignIn"}
//             </button>
//         </form>
//     );
// };

// export default AuthForm;
