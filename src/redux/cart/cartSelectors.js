import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((curr, ci) => curr + ci.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (ci) =>
  ci.reduce((accum, cim) => accum + cim.quantity * cim.price, 0)
);
