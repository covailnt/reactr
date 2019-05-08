import React, { Component } from "react";
import CreateAccount from "./pages/createAccount";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes/routes"
import { syncHistoryWithStore } from "react-router-redux";

// import Firebase, { FirebaseContext } from "./components/Firebase";
// ReactDOM.render(
//   <FirebaseContext.Provider value={new Firebase()}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById("root")
// );

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
export default App;

//history={history}
//const history = syncHistoryWithStore(browserHistory, store);
