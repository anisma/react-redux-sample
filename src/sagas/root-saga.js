import { all, call } from "redux-saga/effects";

import { userSaga } from "../sagas/user/user-saga";

export default function* rootSaga() {
  yield all([call(userSaga)]);
}
