import React, { Component } from "react";
import Front from "../layout/front/front";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LandingPageForm from "../forms/landingPageForm/landingPageForm";
import * as ROUTES from "../../routes/constants"

const mapStateToProps = (state) => {
    return { loggedIn: state.loggedIn }
}


class LandingPage extends Component {
    render() {
        return (
            this.props.loggedIn == "NO" ? <Redirect to={ROUTES.SIGN_IN} /> :
                <Front>
                    <LandingPageForm />
                </Front>
        );
    }
}

export default connect(mapStateToProps)(LandingPage);
