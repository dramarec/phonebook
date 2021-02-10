import React from 'react';
import style from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ children, title }) => {
    return (
        <div className={style.container}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
};

export default Container;

Container.propTypes = {
    children: PropTypes.node.isRequired,
};
