import { createSelector } from "reselect";

const selectItems = (state: any) => state.cart.items;

export const selectTotalPrice = createSelector(selectItems, (items) =>
  items.reduce((sum: number, item: any) => sum + item.price, 0)
);
