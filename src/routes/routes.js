import React from "react"
import CreateAccount from "../components/pages/createAccount";
import Login from "../components/pages/login";
import ForgotPassword from "../components/pages/forgotPassword";
import LandingPage from "../components/pages/landingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact strict component={LandingPage} />
                <Route path="/log-in" exact strict component={Login} />
                <Route path="/forgot-password" exact strict component={ForgotPassword} />
                <Route path="/create-account" exact strict component={CreateAccount} />
                <Route path="/landing-page" exact strict component={LandingPage} />
            </Switch>
        </Router>
    )
}

export default Routes;