import React, { Component } from "react";
import Front from "../layout/front/front";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SignOutForm from "../forms/signOutForm/signOutForm";
import * as ROUTES from "../../routes/constants"

const mapStateToProps = (state) => {
    return { loggedIn: state.loggedIn }
}


class Home extends Component {
    render() {
        return (
            this.props.loggedIn == "NO" ? <Redirect to={ROUTES.SIGN_IN} /> :
                <Front>
                    <SignOutForm />
                </Front>
        );
    }
}

export default connect(mapStateToProps)(Home);
