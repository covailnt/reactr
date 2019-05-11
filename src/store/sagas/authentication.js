import { all, fork, takeLatest, put } from "redux-saga/effects"
import { login, logout } from "../actions/userActions"


export default function* () {
    yield all([
        fork(watchLogin),
        fork(watchLogout)
    ]);
}



function* watchLogin() {
    yield takeLatest("LOGIN_SAGA", loginAsync);
}
function* loginAsync() {
    yield put(login());
}



export function* watchLogout() {
    yield takeLatest("LOGOUT_SAGA", logoutAsync)
}
function* logoutAsync() {
    yield put(logout());
}



