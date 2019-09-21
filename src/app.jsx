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
import withAuthentication from "./firebase/session/withAuthentication";


//      TODO
//
//        -handle errors in sagas 
// 
//        -integrate  withAuthentication into redux/sagas   / make things look at firebase Reducer  not Account Reducer
//
//        -add other actions to sagas/forms  & make everything point to constant / action creators
//
//        -default route "page not found"  
//
//        -do something after re-setting password to know you did it


const rrfConfig = {};

const myfirebase            = new Firebase();
const getFirebase           = myfirebase.getFirebase;
const fbauth_initial_state  =  JSON.parse(localStorage.getItem("firebaseAuth")) ? JSON.parse(localStorage.getItem("firebaseAuth")) : {};
const initial_state         = { account: { signedIn: "NO" }, firebase : {auth: fbauth_initial_state}};  //look in local data for something like this

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  routerReducer
});


const sagaMiddleWare          = createSagaMiddleware();
const middleware              = applyMiddleware(sagaMiddleWare);
const createStoreWithFirebase = compose(reactReduxFirebase(myfirebase.app, rrfConfig))(createStore)
const composedEnhancers       = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (dummyFunction) => dummyFunction  
);

const store = createStoreWithFirebase(rootReducer,initial_state, composedEnhancers);
sagaMiddleWare.run(sagas, getFirebase);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FirebaseContext.Provider value={myfirebase}>
           <Routes />
        </FirebaseContext.Provider>
      </Provider>
    );
  }
}
export default App;

