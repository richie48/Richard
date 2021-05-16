// every resource wll have a reducer
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

// the reducer takes i a state(default is an initial state) and an action
export const productListReducer = (state = { products: [] }, action) => {
  //i had an error i initially used action,type rather than action.type which is the type of what is dispatched
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
//to use this reducer we need to add it to our store
