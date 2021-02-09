import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import Layout from '../layout/Layout';
import styles from './Login.form.module.css';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin({ ...this.state });
        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <Layout title="Login">
                <div>
                    <form onSubmit={this.handleSubmit} style={styles.form}>
                        <label style={styles.label}>
                            Email
                            <input
                                className={styles.input}
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </label>

                        <label style={styles.label}>
                            Password
                            <input
                                className={styles.input}
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </label>

                        <button className={styles.button} type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginForm);
