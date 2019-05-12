import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./app";
import Firebase, { FirebaseContext } from "./firebase";

// ReactDOM.render(
//     <App />,
//     document.getElementById("app")
// );



ReactDOM.render(
    //<FirebaseContext.Provider value={new Firebase()}>
    <App />,
    //</FirebaseContext.Provider>,
    document.getElementById("app")
);

