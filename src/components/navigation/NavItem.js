import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const NavItem = ({ isAuth, path, name, exact, isPrivate, restricted }) => {
    return (
        <>
            {!isAuth && !isPrivate && !restricted && (
                <li className={styles.listItem} key={path}>
                    <NavLink
                        to={path}
                        exact={exact}
                        className="link"
                        activeClassName="active-link"
                    >
                        {name}
                    </NavLink>
                </li>
            )}
            {isAuth && isPrivate && !restricted && (
                <li className={styles.listItem} key={path}>
                    <NavLink
                        to={path}
                        exact={exact}
                        className="link"
                        activeClassName="active-link"
                    >
                        {name}
                    </NavLink>
                </li>
            )}
            {!isAuth && !isPrivate && restricted && (
                <li className={styles.listItem} key={path}>
                    <NavLink
                        to={path}
                        exact={exact}
                        className="link"
                        activeClassName="active-link"
                    >
                        {name}
                    </NavLink>
                </li>
            )}
        </>
    );
};

export default NavItem;
