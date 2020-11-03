  
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthenticationService } from  '../services/AuthService';

export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = AuthenticationService.currentUserValue;
        if (currentUser) {
            return <Redirect to={{ pathname: '/'}} />
        }
        return <Component {...props} />
    }} />
)