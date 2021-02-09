import React from 'react';
import { Route } from 'react-router-dom';

const PablickRotes = ({ path, exact, component, isAuth }) => {
    return (
        <>
            <Route path={path} exact={exact} component={component} />
        </>
    );
};

export default PablickRotes;
