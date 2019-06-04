import firebase from "firebase/app";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { BrowserRouter as Router } from "react-router-dom";
import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { config } from "./firebase/firebase";
import Routes from "./routes/routes";
import auth from "./store/reducers/auth";
import sagas from "./store/sagas";
//import { withAuthentication } from "./firebase/session";

// react-redux-firebase config
const rrfConfig = {};

firebase.initializeApp(config);

const initial_state = {
  signedIn: "NO",
}

const rootReducer = combineReducers({
  auth,
  firebase: firebaseReducer,
  routerReducer
});

const sagaMiddleWare = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleWare);
const composedEnhancers = compose(
  middleware,
  reactReduxFirebase(firebase, rrfConfig),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, initial_state, composedEnhancers);

sagaMiddleWare.run(sagas);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router >
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
//export default withAuthentication(App);

