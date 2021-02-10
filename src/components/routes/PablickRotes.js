import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PablickRotes = ({ path, exact, component, isAuth, restricted }) => {
    return (
        <>
            {isAuth && restricted ? (
                <Redirect to="/contacts" />
            ) : (
                <Route path={path} exact={exact} component={component} />
            )}
        </>
    );
};

export default PablickRotes;
