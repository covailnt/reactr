import React, { Component } from "react";
import { Provider } from "react-redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { BrowserRouter as Router } from "react-router-dom";
import { routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { config } from "./firebase/firebase";
import Routes from "./routes/routes";
import accountReducer from "./store/reducers/account";
import sagas from "./store/sagas";
import Firebase, { FirebaseContext } from "./firebase";





// react-redux-firebase config
const rrfConfig = {};

// firebase.initializeApp(config);
const myfirebase = new Firebase();
const getFirebase = myfirebase.getFirebase;
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
const createStoreWithFirebase = compose(reactReduxFirebase(myfirebase.app, rrfConfig))(createStore)
const composedEnhancers = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStoreWithFirebase(rootReducer, initial_state, composedEnhancers);

sagaMiddleWare.run(sagas, getFirebase);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FirebaseContext.Provider value={myfirebase}>
          <Router >
           <Routes />
          </Router>
        </FirebaseContext.Provider>,
      </Provider>
    );
  }
}
export default App;

