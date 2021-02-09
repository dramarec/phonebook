import React from 'react';
import Navigation from '../navigation/Nav';
import styles from './AppBar.module.css';

const AppBar = () => {
    return (
        <header className={styles.header}>
            <Navigation />
        </header>
    );
};

export default AppBar;
