import React, {useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'



const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useSelector(state => state.userSignin);
    const { isAuthenticated } = auth;
    console.log(isAuthenticated);
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [isAuthenticated]);
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isAuthenticated ?
                <Component  {...props} />
            : <Redirect to="/signin48235" />
        )} />
    );
};

export default PrivateRoute;