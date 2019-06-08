import React, { Component } from "react";
import Front from "../layout/front/front";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SignOutForm from "../forms/signOutForm/signOutForm";
import * as ROUTES from "../../routes/constants"

import { Link } from "react-router-dom";  //---------------------   this should be removed eventually  

const mapStateToProps = (state) => {
    return { signedIn: state.account.signedIn }
}


class Home extends Component {
    render() {
        return (
            this.props.signedIn == "NO" ? <Redirect to={ROUTES.SIGN_IN} /> :
                <Front>
                    <Link to={ROUTES.ACCOUNT} className="float-right">
                        Account Page
                    </Link>
                    <SignOutForm />
                </Front>
        );
    }
}

export default connect(mapStateToProps)(Home);
