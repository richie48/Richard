import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      //checks if item in the payload is already in the state
      const existItem = state.cartItems.find((x) => x.product === item.product);
      //if the item exist, we map through all the items that are in the state and see if they are the same if not we spread all the iteems x
      //if the item doesnt exist in the state we copy every cart item in the state and add the item
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    //so basicallyall we do is filter out the product that we are removing.
    default:
      return state;
  }
};
