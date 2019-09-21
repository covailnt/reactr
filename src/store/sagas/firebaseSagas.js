import { all, takeLatest, put, take } from "redux-saga/effects";
import { signIn, signOut } from "../actions/userActions";
import Firebase from  "../../firebase"


export default function* (getFirebase) {
    yield all([
        takeLatest("SIGN_IN_EMAIL_SAGA" , signInEmailAsync,     getFirebase),
        takeLatest("SIGN_OUT_SAGA"      , signOutAsync,         getFirebase),
        takeLatest("SIGN_UP_EMAIL_SAGA" , signUpAsync,          getFirebase),
        takeLatest("RESET_PASSWORD_SAGA", resetPasswordAsync,   getFirebase),
        takeLatest("FACEBOOK_SAGA"      , facebookAsync,        getFirebase),
        takeLatest("GOOGLE_SAGA"        , googleAsync,          getFirebase),
        takeLatest("TWITTER_SAGA"       , twitterAsync,         getFirebase)
    ]);
}
 
 
function* signInEmailAsync(getFirebase, action) {
    console.log(getFirebase());
    const {email , password} = action.payload;
    const signedIn = yield getFirebase().doSignInWithEmailAndPassword("jayrohwein@yahoo.com", "password");
    //console.log(signedIn);
}

function* signOutAsync(getFirebase) {
    yield getFirebase().doSignOut();
}


function* signUpAsync(getFirebase, action) {
    const {email , password} = action.payload;
    const createUser = yield getFirebase().doCreateUserWithEmailAndPassword(email, password);
    //console.log(createUser);
}

function* resetPasswordAsync(getFirebase, action){
    const {email} = action.payload;
    const resetPassword = yield getFirebase().doPasswordReset(email);
    //console.log(resetPassword);
}

function* facebookAsync(getFirebase){
    const facebookAsync = yield getFirebase().doSignInWithFacebook();
    //console.log(twitterAsync);
}
function* googleAsync(getFirebase){
    const googleAsync = yield getFirebase().doSignInWithGoogle();
    //console.log(googleAsync);
}
function* twitterAsync(getFirebase){
    const twitterAsync = yield getFirebase().doSignInWithTwitter();
    //console.log(twitterAsync);
}
