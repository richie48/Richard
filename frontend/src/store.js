import { createStore, combineReducers, applyMiddleware } from 'redux';
//Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productListReducer } from '../src/reducers/productReducer';

const reducer = combineReducers({ productList: productListReducer });

//If we want something to be loaded put in here as an initial state
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
