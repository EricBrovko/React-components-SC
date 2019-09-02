// flow

import React, { Fragment } from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { omit } from "lodash";

import Home from "../../home";
import NotFoundPage from "../../notFound";

// import { isAuthenticated } from "../../helper/auth";

const history = createBrowserHistory();

const AuthRoute = props => {
    const Component = props.component;
    const isAuthenticatedUser = props.isAuthenticatedUser;

    const rest = omit(props, "component");

    return isAuthenticatedUser
        ? <Route {...rest} render={
            routeProps => <Component {...routeProps} />
        } />
        : <Route {...rest} render={
            () => <Redirect to={{ pathname: "/login" }} />
        } />;
}

const AppRouter = (props) => {
    //   const isAuthenticatedUser = isAuthenticated();

    return (
        (
            <Router history={history}>
                <Fragment>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <AuthRoute
                            isAuthenticatedUser={true}
                            exact
                            path="/"
                            component={Home}
                        />
                        <AuthRoute
                            isAuthenticatedUser={true}
                            exact
                            path="/private"
                            component={() => <div>Private route</div>}
                        />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Fragment>
            </Router>
        )
    );
};

export default AppRouter;