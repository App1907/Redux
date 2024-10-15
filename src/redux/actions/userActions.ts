export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const addUser = (user: User) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const deleteUser = (id: number) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const updateUser = (user: User) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
