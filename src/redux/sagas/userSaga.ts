import { takeLatest, put, all } from 'redux-saga/effects';
import {
  ADD_USER_REQUEST, DELETE_USER_REQUEST, UPDATE_USER_REQUEST, FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS, ADD_USER_SUCCESS, DELETE_USER_SUCCESS, UPDATE_USER_SUCCESS, User
} from '../actions/userActions';

// Dummy Data
const usersData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Simulate Fetch Users
function* fetchUsersSaga() {
  yield put({ type: FETCH_USERS_SUCCESS, payload: usersData });
}

// Add User
function* addUserSaga(action: { type: string; payload: User }) {
  yield put({ type: ADD_USER_SUCCESS, payload: action.payload });
}

// Delete User
function* deleteUserSaga(action: { type: string; payload: number }) {
  yield put({ type: DELETE_USER_SUCCESS, payload: action.payload });
}

// Update User
function* updateUserSaga(action: { type: string; payload: User }) {
  yield put({ type: UPDATE_USER_SUCCESS, payload: action.payload });
}

// Watcher Saga
export function* userSaga() {
  yield all([
    takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga),
    takeLatest(ADD_USER_REQUEST, addUserSaga),
    takeLatest(DELETE_USER_REQUEST, deleteUserSaga),
    takeLatest(UPDATE_USER_REQUEST, updateUserSaga),
  ]);
}
