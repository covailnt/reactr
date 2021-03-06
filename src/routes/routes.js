import React from "react";
import SignUp from "../components/pages/signUp";
import SignIn from "../components/pages/signIn";
import ForgotPassword from "../components/pages/forgotPassword";
import Home from "../components/pages/home";
import Account from "../components/pages/account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    };
};

function Routes() {
    return (

        this.props.signedIn == "YES" ? 

        <Switch>
            <Route path="/" exact strict component={Home} />
            <Route path={ROUTES.HOME} exact strict component={Home} />
            <Route path={ROUTES.ACCOUNT} exact strict component={Account} />
        </Switch>
        
        :

        <Switch>
            <Route path="/" exact strict component={SignIn} />
            <Route path={ROUTES.SIGN_IN} exact strict component={SignIn} />
            <Route path={ROUTES.FORGOT_PASSWORD} exact strict component={ForgotPassword} />
            <Route path={ROUTES.SIGN_UP} exact strict component={SignUp} />
        </Switch>

    )
}

export default connect(mapStateToProps)(Routes);