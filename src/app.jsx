import React, { Component } from "react";
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import CreateAccount from "./pages/createAccount";
import Login from "./pages/login";

import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { syncHistoryWithStore } from "react-router-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" exact strict component={Login} />
          <Route path="/createAccount" exact strict component={CreateAccount} />
        </Router>
      </Provider>
    );
  }
}
export default App;

//history={history}
//const history = syncHistoryWithStore(browserHistory, store);
