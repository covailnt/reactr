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

export function login() {
  return { type: "LOGIN", payload: {} };
}

export function logout() {
  return { type: "LOGOUT", payload: {} }
}

