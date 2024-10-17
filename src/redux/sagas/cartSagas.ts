import { takeEvery, put } from 'redux-saga/effects';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

function* addToCartSaga(action) {
  // You can add API calls here if needed
  yield put({ type: ADD_TO_CART, payload: action.payload });
}

function* removeFromCartSaga(action) {
  yield put({ type: REMOVE_FROM_CART, payload: action.payload });
}

export function* cartSagas() {
  yield takeEvery(ADD_TO_CART, addToCartSaga);
  yield takeEvery(REMOVE_FROM_CART, removeFromCartSaga);
}
