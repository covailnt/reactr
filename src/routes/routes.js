import React from "react"
import Login from "../pages/login";
import CreateAccount from "../pages/createAccount"
import ForgotPassword from "../pages/forgotPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact strict component={Login} />
                <Route path="/forgot-password" exact strict component={ForgotPassword} />
                <Route path="/create-account" exact strict component={CreateAccount} />
            </Switch>
        </Router>
    )
}

export default Routes;