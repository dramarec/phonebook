import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { phbookRoutes } from '../routes/phbookRoutes';
import AppBar from './appBar/AppBar';
import Main from './layout/main/Main';
import Section from './layout/section/Section';

const App = () => {
    return (
        <>
            <AppBar />
            <Main>
                <Section>
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Switch>
                            {phbookRoutes.map(({ path, exact, component }) => (
                                <Route
                                    path={path}
                                    exact={exact}
                                    component={component}
                                    key={path}
                                />
                            ))}
                        </Switch>
                    </Suspense>
                </Section>
            </Main>
        </>
    );
};

export default App;
