import React, { Component } from "react";
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import CreateAccount from "./pages/createAccount";
import Login from "./pages/login";

import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { syncHistoryWithStore } from "react-router-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact strict component={Login} />
            <Route
              path="/create-account"
              exact
              strict
              component={CreateAccount}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;

//history={history}
//const history = syncHistoryWithStore(browserHistory, store);
