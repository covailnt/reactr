import React, { Component } from "react";
import Front from "../layout/front/front";
import LoginForm from "../forms/loginForm/loginForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withFirebase } from '../../firebase';


const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

class Login extends Component {
  render() {
    return (

      this.props.loggedIn == "YES" ? <Redirect to="/landing-page" /> :
        <Front>
          <LoginForm />
        </Front>
    )
  }
}
export default withFirebase(connect(mapStateToProps)(Login));
