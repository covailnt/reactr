import React from "react"
import CreateAccount from "../components/pages/createAccount";
import Login from "../components/pages/login";
import ForgotPassword from "../components/pages/forgotPassword";
import LandingPage from "../components/pages/landingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants"

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact strict component={LandingPage} />
                <Route path={ROUTES.SIGN_IN} exact strict component={Login} />
                <Route path={ROUTES.FORGOT_PASSWORD} exact strict component={ForgotPassword} />
                <Route path={ROUTES.SIGN_UP} exact strict component={CreateAccount} />
                <Route path={ROUTES.HOME} exact strict component={LandingPage} />\
            </Switch>
        </Router>
    )
}

export default Routes;