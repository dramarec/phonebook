import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { Switch } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';
import { phbookRoutes } from '../routes/phbookRoutes';
import AppBar from './appBar/AppBar';
import Main from './layout/main/Main';
import Section from './layout/section/Section';
import PablickRotes from './routes/PablickRotes';
import PrivateRoutes from './routes/PrivateRoutes';
import Spinner from './spinner/Spinner';

const App = () => {
    const isAuth = useSelector(authSelectors.isAuth);

    return (
        <>
            <AppBar />
            <Main>
                <Section>
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            {phbookRoutes.map(route =>
                                !route.isPrivate ? (
                                    <PablickRotes {...route} isAuth={isAuth} key={route.path} />
                                ) : (
                                    <PrivateRoutes {...route} isAuth={isAuth} key={route.path} />
                                ),
                            )}
                        </Switch>
                    </Suspense>
                </Section>
            </Main>
        </>
    );
};

export default App;
