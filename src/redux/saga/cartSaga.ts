import { put, takeLatest, call, all } from 'redux-saga/effects';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  addToCartSuccess,
  addToCartFailure,
  removeFromCartSuccess,
  removeFromCartFailure,
} from '../actions/cartActions';

const apiAddToCart = (product: any) => {
  // Simulating an API call using fetch or timeout
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: product }), 1000)
  );
};

const apiRemoveFromCart = (productId: number) => {
  // Simulating an API call using fetch or timeout
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: productId }), 1000)
  );
};

function* handleAddToCart(action: any) {
  try {
    const response = yield call(apiAddToCart, action.payload);
    yield put(addToCartSuccess(response.data));
  } catch (error) {
    yield put(addToCartFailure('Failed to add to cart'));
  }
}

function* handleRemoveFromCart(action: any) {
  try {
    const response = yield call(apiRemoveFromCart, action.payload);
    yield put(removeFromCartSuccess(response.data));
  } catch (error) {
    yield put(removeFromCartFailure('Failed to remove from cart'));
  }
}

function* cartSaga() {
  yield all([
    takeLatest(ADD_TO_CART, handleAddToCart),
    takeLatest(REMOVE_FROM_CART, handleRemoveFromCart),
  ]);
}

export default cartSaga;
