import React, { Component } from "react";
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import CreateAccount from "./pages/createAccount";

import store from './store';
import { Provider } from 'react-redux';

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div>
          <CreateAccount></CreateAccount>
        </div>
      </Provider>
    );
  }
}

export default App;
