import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";

import { signIn, signOut } from "../actions/userActions";

export default [
    takeLatest("SIGN_IN_SAGA", signInAsync),
    takeLatest("SIGN_OUT_SAGA", signOutAsync)
];

function* signInAsync() {
    yield put(signIn());
}

function* signOutAsync() {
    yield put(signOut());
}

// function* databaseCall() {
//     yield call(functionName, arg1, arg2, ...argN);

//     yield call(axios.post, "firebase.com")
// }
