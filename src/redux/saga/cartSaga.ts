import { takeLatest, put, all } from 'redux-saga/effects';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

function* handleAddToCart(action: any) {

}

function* handleRemoveFromCart(action: any) {

}

function* cartSaga() {
  yield all([
    takeLatest(ADD_TO_CART, handleAddToCart),
    takeLatest(REMOVE_FROM_CART, handleRemoveFromCart)
  ]);
}

export default cartSaga;
