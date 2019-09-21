import React, { Component } from "react";
import Front from "../layout/front/front";
import SignOutForm from "../forms/signOutForm/signOutForm";
import * as ROUTES from "../../routes/constants"

import { Link } from "react-router-dom";  //---------------------   this should be replaced eventually  



class Home extends Component {
    render() {
        return (
                <Front>
                    <Link to={ROUTES.ACCOUNT} className="float-right">
                        Account Page
                    </Link>
                    <SignOutForm />
                </Front>
        );
    }
}

export default (Home);
