import firebase from "firebase/app";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { reactReduxFirebase, firebaseReducer, getFirebase } from "react-redux-firebase";
import { BrowserRouter as Router } from "react-router-dom";
import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { config } from "./firebase/firebase";
import Routes from "./routes/routes";
import accountReducer from "./store/reducers/account";
import sagas from "./store/sagas";
import { withAuthentication } from "./firebase/session";



//blah blah blah


// react-redux-firebase config
const rrfConfig = {};

firebase.initializeApp(config);

const initial_state = {
  account: { signedIn: "NO" }
}

const rootReducer = combineReducers({
  account: accountReducer
  ,firebase: firebaseReducer
  ,routerReducer
});

const sagaMiddleWare = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleWare);
const composedEnhancers = compose(
  middleware
  ,reactReduxFirebase(firebase, rrfConfig)
  //,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
);

const store = createStore(rootReducer, initial_state, composedEnhancers);

sagaMiddleWare.run(sagas, getFirebase);

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

