import { call, takeLatest, put } from "redux-saga/effects";

import { signIn, signOut } from "../actions/userActions";

export default [
    takeLatest("SIGN_IN_SAGA", signInAsync),
    takeLatest("SIGN_OUT_SAGA", signOutAsync)
];

function* signInAsync(getFirebase) {

    // DO I NEED CALL HERE?
    yield console.log("hello world" + getFirebase());
    //yield getFirebase().auth().login("jaydeniscool@duh", "password");
    yield put(signIn());
}

function* signOutAsync(getFirebase) {

    yield put(signOut());
}




// function* databaseCall() {
//     yield call(functionName, arg1, arg2, ...argN);

//     yield call(axios.post, "firebase.com")
// }
