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
  return { type: "LOGIN", payload: {} };
}

export function signOut() {
  return { type: "LOGOUT", payload: {} }
}

