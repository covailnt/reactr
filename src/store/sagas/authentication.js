import { all, fork, takeLatest, put } from "redux-saga/effects"
import { signIn, signOut } from "../actions/userActions"


export default function* () {
    yield all([
        fork(watchSignIn),
        fork(watchSignOut)
    ]);
}



function* watchSignIn() {
    yield takeLatest("LOGIN_SAGA", signInAsync);
}
function* signInAsync() {
    yield put(signIn());
}



export function* watchSignOut() {
    yield takeLatest("LOGIN_SAGA", signOutAsync);
}
function* signOutAsync() {
    yield put(signOut());
}



