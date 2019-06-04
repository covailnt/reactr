import { all } from "redux-saga/effects";

import firebaseSagas from "./firebaseSagas";

export default function* () {
  yield all([ 
    ...firebaseSagas 
  ]);
}
