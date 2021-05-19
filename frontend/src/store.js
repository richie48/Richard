import { createStore, combineReducers, applyMiddleware } from 'redux';
//Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  productListReducer,
  productDetailsReducer,
} from '../src/reducers/productReducer';
import { cartReducer } from '../src/reducers/cartReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

// we would access the cart items in our store.js
//if it exist we convert back to json
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

//If we want something to be loaded put in here as an initial state
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
