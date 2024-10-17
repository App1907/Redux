import {
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_FAILURE,
} from '../actions/cartActions';

const initialState = {
  products: [],
  count: 0,
  error: null,
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        count: state.count + 1,
        error: null,
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product: any) => product.id !== action.payload
        ),
        count: state.count - 1,
        error: null,
      };
    case ADD_TO_CART_FAILURE:
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
