import React, { Component } from "react";
import { Provider } from "react-redux";
import Routes from "./routes/routes";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import auth from "./store/reducers/auth";
import createSagaMiddleware from "redux-saga";
import sagas from "./store/sagas";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import { BrowserRouter as Router, browserHistory } from "react-router-dom";
//import { withAuthentication } from "./firebase/session";



const initial_state = {
  signedIn: "NO",
}

const rootReducer = combineReducers(auth, routerReducer);


const sagaMiddleWare = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleWare);
const composedEnhancers = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(auth, initial_state, composedEnhancers);


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

