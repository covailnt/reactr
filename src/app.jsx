import React, { Component } from "react";
import { Provider } from "react-redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { routerReducer, BrowserHistory, routerMiddleware} from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import Routes from "./routes/routes";
import sagas from "./store/sagas/firebaseSagas";
import Firebase, { FirebaseContext } from "./firebase";


//      TODO
//
//        -handle errors in sagas , rejected email / passords ect.
//        -replace  literals with  action creators &   constants
//        -push route after login / logout event
//        -default route "page not found"  
//        -do something after re-setting password to know you did it
//        - use localStorage  and set rrf to presence: false;



//react-redux-firebase config
const rrfConfig = {};
//presence: false; 

const firebase              = new Firebase();
const getFirebase           = () => {return firebase};
const initial_state         = { firebase : {}}; 
console.log(firebase.getFirebase());
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  routerReducer
});


const sagaMiddleWare          = createSagaMiddleware();
const routerMiddleWare        = routerMiddleware(BrowserHistory);
const middleware              = applyMiddleware(sagaMiddleWare, routerMiddleWare);
const createStoreWithFirebase = compose(reactReduxFirebase(firebase.app, rrfConfig))(createStore)
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
        <FirebaseContext.Provider value={firebase}>
           <Routes />
        </FirebaseContext.Provider>
      </Provider>
    );
  }
}
export default App;

