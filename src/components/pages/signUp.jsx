import React, { Component } from "react";
import Front from "../layout/front/front"
import SignUpForm from '../forms/signUpForm/signUpForm';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as ROUTES from "../../routes/constants";


class SignUp extends Component {
  render() {
    return (
      this.props.signedIn == "YES" ? <Redirect to={ROUTES.HOME} /> :
        <Front>
          <SignUpForm></SignUpForm>
        </Front>
    )
  }
}

export default SignUp;