import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import store from "./store";

// Now you can read location data from the store!
let currentLocation = store.getState().router.pathname;

// You can also subscribe to changes in the location!
let unsubscribe = store.subscribe(() => {
  let previousLocation = currentLocation;
  currentLocation = store.getState().router.pathname;
  if (previousLocation !== currentLocation) {
    // You can render your application reactively here!
  }
});

store.dispatch(push("/about"));
ReactDOM.render(<App />, document.getElementById("app"));
