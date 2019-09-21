import React, {Component} from "react";
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
        signedIn: !state.firebase.auth.isEmpty
    };
};

class Routes extends Component {
    
    render(){

        console.log(this.props.signedIn)
        return (
            
            this.props.signedIn ? 

            <Router>
                <Switch>
                    <Route path="/"                         exact strict component={Home} />
                    <Route path={ROUTES.HOME}               exact strict component={Home} />
                    <Route path={ROUTES.ACCOUNT}            exact strict component={Account} />
                </Switch>
            </Router>

            :

            <Router>
                <Switch>
                    <Route path="/"                         exact strict component={SignIn} />
                    <Route path={ROUTES.SIGN_IN}            exact strict component={SignIn} />
                    <Route path={ROUTES.FORGOT_PASSWORD}    exact strict component={ForgotPassword} />
                    <Route path={ROUTES.SIGN_UP}            exact strict component={SignUp} />
                    <Route path={ROUTES.HOME}               exact strict component={Home} />
                    <Route path={ROUTES.ACCOUNT}            exact strict component={Account} />
                </Switch>
            </Router>

        )
    }
}

export default connect(mapStateToProps)( Routes);