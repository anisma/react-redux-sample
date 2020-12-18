import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import {
  userActions,
  userSuccess,
  userFailed
} from "../../redux/user/user-ducks";

//fetch data from API endpoint
const getUser = () => {
  const id = Math.floor(Math.random() * 10);
  console.log("id:", id);
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};

export function* fetchUserAsync() {
  try {
    //axios
    const user = yield call(getUser);
    yield put(userSuccess(user.data));
  } catch (err) {
    yield put(userFailed(err.message));
  }
}

export function* fetchUserRequest() {
  yield takeLatest(userActions.USER_REQUEST, fetchUserAsync);
}

export function* userSaga() {
  yield all([call(fetchUserRequest)]);
}
