import React from "react"
import CreateAccount from "../components/pages/createAccount";
import SignIn from "../components/pages/signIn";
import ForgotPassword from "../components/pages/forgotPassword";
import LandingPage from "../components/pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants"

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact strict component={LandingPage} />
                <Route path={ROUTES.SIGN_IN} exact strict component={SignIn} />
                <Route path={ROUTES.FORGOT_PASSWORD} exact strict component={ForgotPassword} />
                <Route path={ROUTES.SIGN_UP} exact strict component={CreateAccount} />
                <Route path={ROUTES.HOME} exact strict component={LandingPage} />
            </Switch>
        </Router>
    )
}

export default Routes;