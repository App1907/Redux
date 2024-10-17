import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
  products: [],
  count: 0
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
        count: state.count + 1
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product: any) => product.id !== action.payload
        ),
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default cartReducer;
