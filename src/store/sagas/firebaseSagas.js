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
    const signedIn = yield new Firebase().doSignInWithEmailAndPassword(email, password);
    //console.log(signedIn);
}

function* signOutAsync() {
    yield new Firebase().doSignOut();
}


function* signUpAsync(action) {
    const {email , password} = action.payload;
    const createUser = yield new Firebase().doCreateUserWithEmailAndPassword(email, password);
    //console.log(createUser);
}

function* resetPasswordAsync(action){
    const {email} = action.payload;
    const resetPassword = yield new Firebase().doPasswordReset(email);
    //console.log(resetPassword);
}

function* facebookAsync(action){
    const facebookAsync = yield new Firebase().doSignInWithFacebook();
    //console.log(twitterAsync);
}
function* googleAsync(action){
    const googleAsync = yield new Firebase().doSignInWithGoogle();
    //console.log(googleAsync);
}
function* twitterAsync(action){
    const twitterAsync = yield new Firebase().doSignInWithTwitter();
    //console.log(twitterAsync);
}
