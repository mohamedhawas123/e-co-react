import { createSelector } from 'reselect';

const selectCart = state => state.dropdown;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartitem
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartitem =>
    cartitem.reduce(
      (accumalatedQuantity, cartitem) =>
        accumalatedQuantity + cartitem.quantity,
      0
    )
);


