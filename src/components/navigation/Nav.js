import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../redux/auth/authActions';
import { phbookRoutes } from '../../routes/phbookRoutes';
import Container from '../layout/container/Container';
import styles from './Nav.module.css';
import NavItem from './NavItem';

const Navigation = () => {
    const isAuth = useSelector(state => state.auth.isAuth);

    const dispatch = useDispatch();
    const onHandleClick = () => {
        dispatch(signOut());
    };
    return (
        <Container>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    {phbookRoutes.map(route => (
                        <NavItem {...route} isAuth={isAuth} key={route.path} />
                    ))}
                </ul>
            </nav>
            <button className={styles.button} onClick={onHandleClick}>
                Logout
            </button>
        </Container>
    );
};

export default Navigation;
