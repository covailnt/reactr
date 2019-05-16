import * as actionType from "../constants";


export function signIn() {
  return { type: actionType.SET_SIGNED_IN, payload: {} };
}

export function signOut() {
  return { type: actionType.SET_SIGNED_OUT, payload: {} }
}

