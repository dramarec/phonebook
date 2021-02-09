import React from 'react';
import style from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
    return <section className={style.section}>{children}</section>;
};

export default Section;

Section.propTypes = {
    children: PropTypes.node.isRequired,
};
