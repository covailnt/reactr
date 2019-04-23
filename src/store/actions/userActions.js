import * as type from "../constants";

export function setEmail(email) {
  return {
    type: type.SET_EMAIL,
    email
  };
}

export function setPassword(password) {
  return {
    type: type.SET_PASSWORD,
    password
  };
}

export function fakeFireBaseLogin(username, password) {
  return () => {
    console.log("logged in successfully");
  };
}
