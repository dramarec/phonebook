import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import Layout from '../layout/Layout';
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
            <Layout title="Register">
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
            </Layout>
        );
    }
}

export default connect(null, { onRegister: authOperations.register })(AuthForm);
