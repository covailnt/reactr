import { takeLatest, put } from "redux-saga/effects"
import { login } from "../actions/userActions"


function* watchLogin() {
    yield takeLatest("LOGIN_SAGA", loginAsync);
}
function* loginAsync() {
    yield put(login());
}


export default watchLogin;