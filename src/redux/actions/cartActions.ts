export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';

export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE';

export const addToCart = (product: any) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const addToCartSuccess = (product: any) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: product,
});

export const addToCartFailure = (error: string) => ({
  type: ADD_TO_CART_FAILURE,
  payload: error,
});

export const removeFromCart = (productId: number) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const removeFromCartSuccess = (productId: number) => ({
  type: REMOVE_FROM_CART_SUCCESS,
  payload: productId,
});

export const removeFromCartFailure = (error: string) => ({
  type: REMOVE_FROM_CART_FAILURE,
  payload: error,
});
