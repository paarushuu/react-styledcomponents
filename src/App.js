import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './utils/history';
import { PrivateRoute } from './router/PrivateRoute';
import { Home } from './homePage';
import { LoginPage } from './login';
import styled, { css } from 'styled-components';
import { Container } from 'reactstrap';
function App() {

    return (
        
           <Container>
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={Home} />
                            <Route path="/login" component={LoginPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
           </Container>
    );
}

export { App };
