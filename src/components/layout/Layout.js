import React from 'react';
import style from './Layout.module.css';
import PropTypes from 'prop-types';

const Layout = ({ children, title }) => {
    return (
        <div className={style.container}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
};

export default Layout;

Layout.propTypes = {
    // children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};
