import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import "./App.css";
import LogIn from "./components/front/LogIn";
import CreateAccount from "./components/front/CreateAccount";
import ForgotPassword from "./components/front/ForgotPassword";

import Account from "./components/admin/account/Account";
import ResetPassword from "./components/admin/resetPassword/ResetPassword";
import Page from "./components/admin/pages/Page";
import AdminLayout from "./components/admin/layouts/adminLayout/adminLayout";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="Demo-nav">
              <div>
                <Navbar
                  id="Demo-NavBar"
                  if="demo-nav"
                  color="dark"
                  light
                  expand="lg"
                >
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink to="/log-in">Login</NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink to="/create-account">Create Account</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/forgot-password">Forgot Password</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/admin/account">Account</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/admin/reset-password">
                          Reset Password
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/admin/page">Page</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            </header>
            <Redirect from="/" to="/log-in" />
            <Route path="/log-in" component={LogIn} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/admin/account" component={Account} />
            <Route path="/admin/reset-password" component={ResetPassword} />
            <Route path="/admin/page" component={Page} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
