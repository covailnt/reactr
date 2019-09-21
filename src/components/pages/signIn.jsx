import React, { Component } from "react";
import Front from "../layout/front/front";
import SignInForm from "../forms/signInForm/signInForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as ROUTES from "../../routes/constants";


class SignIn extends Component {
  render() {
    return (
        <Front>
          <SignInForm />
        </Front>
    )
  }
}
export default SignIn;
