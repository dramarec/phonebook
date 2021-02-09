import React from 'react';
import style from './Layout.module.css';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Layout = ({ children, title }) => {
    return (
        <div className={style.container}>
            <CSSTransition
                in={true}
                appear={true}
                classNames={style}
                timeout={500}
                unmountOnExit
            >
                {title && <h2>{title}</h2>}
            </CSSTransition>

            {children}
        </div>
    );
};

export default Layout;

Layout.propTypes = {
    // children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};
