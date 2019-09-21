import { all } from "redux-saga/effects";

import firebaseSagas from "./firebaseSagas";

export default function* (getFirebase) {
  console.log(getFirebase);
  yield all([
    ...firebaseSagas
  ]);
}
