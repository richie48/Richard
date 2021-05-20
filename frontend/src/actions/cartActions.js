import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

// we are adding getState to this because we want to be able to save our cart to local storage,it can help with that.
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  //we use our local storage API,save as cartItems.....WE save the entire cart and covert to json since we can only save strings.
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id, qty) => async (dispatch) => {};
