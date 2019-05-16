import { all, fork, takeLatest, put } from "redux-saga/effects"
import { signIn, signOut } from "../actions/userActions"


export default function* () {
    yield all([
        fork(watchSignIn),
        fork(watchSignOut)
    ]);
}



function* watchSignIn() {
    yield takeLatest("SIGN_IN_SAGA", signInAsync);
}
function* signInAsync() {
    yield put(signIn());
}



export function* watchSignOut() {
    yield takeLatest("SIGN_OUT_SAGA", signOutAsync);
}
function* signOutAsync() {
    yield put(signOut());
}



