import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import "./App.css";
import LogIn from "./components/front/LogIn";
import CreateAccount from "./components/front/CreateAccount";
import ForgotPassword from "./components/front/ForgotPassword";

import Account from "./components/admin/account/Account";
import ResetPassword from "./components/admin/resetPassword/ResetPassword";
import Page from "./components/admin/pages/Page";
import AdminLayout from "./components/admin/layouts/adminLayout/adminLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/**
        <Router>
          <div>
            <header className="Demo-nav">
              <ul>
                <li><NavLink to="/log-in">Log-In</NavLink></li>
                <li><NavLink to="/create-account">Create Account</NavLink></li>
                <li><NavLink to="/forgot-password">Forgot Password</NavLink></li>
                <li><NavLink to="/admin/account">Account</NavLink></li>
                <li><NavLink to="/admin/reset-password">Reset Password</NavLink></li>
                <li><NavLink to="/admin/page">Page</NavLink></li>
              </ul>

            </header>
            <Redirect from="/" to="/log-in"></Redirect>
            <Route path="/log-in" component={LogIn} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/admin/account" component={Account} />
            <Route path="/admin/reset-password" component={ResetPassword} />
            <Route path="/admin/page" component={Page} />
          </div>
        </Router>
*/}
        <AdminLayout />
      </div>
    );
  }
}

export default App;
