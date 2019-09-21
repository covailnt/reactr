import { call, takeLatest, put, take } from "redux-saga/effects";
import { signIn, signOut } from "../actions/userActions";
import Firebase from  "../../firebase"


export default [
    takeLatest("SIGN_IN_EMAIL_SAGA" , signInEmailAsync),
    takeLatest("SIGN_OUT_SAGA"      , signOutAsync),
    takeLatest("SIGN_UP_EMAIL_SAGA" , signUpAsync),
    takeLatest("RESET_PASSWORD_SAGA", resetPasswordAsync),
    takeLatest("FACEBOOK_SAGA"      , facebookAsync),
    takeLatest("GOOGLE_SAGA"        , googleAsync),
    takeLatest("TWITTER_SAGA"       , twitterAsync)
];
 
function* signInEmailAsync(action) {
    const {email , password} = action.payload;
    try{
        const signedIn = yield new Firebase().doSignInWithEmailAndPassword(email, password);
        yield put(signIn());
    }catch(err){
        window.alert("invalid username & password")
    }
}

function* signOutAsync() {
    yield new Firebase().doSignOut();
    yield put(signOut());
}


function* signUpAsync(action) {
    const {email , password} = action.payload;
    console.log( "Email: " + email + "  Password: " + password);
    //try{
        const createUser = yield new Firebase().doCreateUserWithEmailAndPassword(email, password);
        console.log(createUser);
        yield put(signIn());
    //}catch(err){
    //    window.alert("cant create account with this information");
    //}
}

function* resetPasswordAsync(action){
    const {email} = action.payload;
    //try{
        const resetPassword = yield new Firebase().doPasswordReset(email);
        console.log(resetPassword);
    //}catch(err){
       // window.alert("cant reset your password");
    //}
}

function* facebookAsync(action){
    const facebookAsync = yield new Firebase().doSignInWithFacebook();
    console.log(twitterAsync);
    yield put(signIn());
}
function* googleAsync(action){
    const googleAsync = yield new Firebase().doSignInWithGoogle();
    console.log(googleAsync);
    yield put(signIn());
}
function* twitterAsync(action){
    const twitterAsync = yield new Firebase().doSignInWithTwitter();
    console.log(twitterAsync);
    yield put(signIn());
}
