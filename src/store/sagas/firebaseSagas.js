import { call, takeLatest, put, take } from "redux-saga/effects";
import { signIn, signOut } from "../actions/userActions";
import Firebase from  "../../firebase"
export default [
    takeLatest("SIGN_IN_SAGA", signInAsync),
    takeLatest("SIGN_OUT_SAGA", signOutAsync)
];

function* signInAsync(action) {
    const {email , password} = action.payload;
    try{
        const signedIn = yield new Firebase().doSignInWithEmailAndPassword(email, password);
        //console.log(signedIn)
        yield put(signIn());
    }catch(err){
        window.alert("invalid username & password")
    }
}

function* signOutAsync() {
    yield console.log("signInAsync ---- ")
    yield new Firebase().doSignOut();
    yield put(signOut());
}