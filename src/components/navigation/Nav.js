import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { phbookRoutes } from '../../routes/phbookRoutes';
import styles from './Nav.module.css';
import NavItem from './NavItem';
import UserMenu from '../userMenu/UserMenu';

import authActions from '../../redux/auth/authActions';
import contactsActions from '../../redux/contacts/contactsActions';
import authSelectors from '../../redux/auth/authSelectors';

const Navigation = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector(authSelectors.isAuth);

    const onHandleClick = () => {
        dispatch(authActions.signOut());
        dispatch(contactsActions.signOutAction());
    };

    return (
        <div className={styles.container__navbar}>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    {phbookRoutes.map(route => (
                        <NavItem {...route} isAuth={isAuth} key={route.path} />
                    ))}
                </ul>
            </nav>
            <UserMenu />
            {isAuth && (
                <button className={styles.button} onClick={onHandleClick}>
                    Logout
                </button>
            )}
        </div>
    );
};

export default Navigation;
