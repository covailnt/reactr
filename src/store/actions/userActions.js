import * as type from "../constants";

export function setEmail(email) {
  return {
    type: type.SET_EMAIL,
    payload: email
  };
}

export function setPassword(password) {
  return {
    type: type.SET_PASSWORD,
    payload: password
  };
}

export function signIn() {
  return { type: "SIGN_IN", payload: {} };
}

export function signOut() {
  return { type: "SIGN_OUT", payload: {} }
}

