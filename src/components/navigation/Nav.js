import React from 'react';
import { NavLink } from 'react-router-dom';
import { phbookRoutes } from '../../routes/phbookRoutes';
import Container from '../layout/container/Container';
import UserMenu from '../UserMenu';
import styles from './Nav.module.css';

const Navigation = () => {
    return (
        <Container>
            <nav>
                <ul className={styles.list}>
                    {phbookRoutes.map(({ path, name, exact }) => (
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
                    ))}
                </ul>
            </nav>
            <UserMenu />
        </Container>
    );
};

export default Navigation;
