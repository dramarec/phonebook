import React from 'react';
import style from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return <div className={style.container}>{children}</div>;
};

export default Container;

Container.propTypes = {
    children: PropTypes.node.isRequired,
};
