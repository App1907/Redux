export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

export interface User {
  id: number;
  name: string;
  email: string;
}

// Action Creators for Saga
export const fetchUsers = () => ({ type: FETCH_USERS_REQUEST });
export const addUser = (user: User) => ({ type: ADD_USER_REQUEST, payload: user });
export const deleteUser = (id: number) => ({ type: DELETE_USER_REQUEST, payload: id });
export const updateUser = (user: User) => ({ type: UPDATE_USER_REQUEST, payload: user });
