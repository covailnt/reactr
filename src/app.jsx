import React, { Component } from "react";
import { Provider } from "react-redux";
import Routes from "./routes/routes";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createAccountReducer from "./store/reducers/createAccount";
import createSagaMiddleware from "redux-saga";
import sagas from "./store/sagas/authentication";
//import { withAuthentication } from "./firebase/session";




const initial_state = {
  loggedIn: "NO",
}

const sagaMiddleWare = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleWare);
const composedEnhancers = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(createAccountReducer, initial_state, composedEnhancers);
sagaMiddleWare.run(sagas);




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
//export default withAuthentication(App);

