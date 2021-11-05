import { AnyAction } from "redux";

export interface CartState {
  items: any[];
}

const initialState = {
  items: [
    { id: 1, name: "Shirt", priceString: "100 $", price: 100 },
    { id: 2, name: "Screwdriver", priceString: "30 $", price: 30 },
    { id: 3, name: "Car", priceString: "10000 $", price: 10000 },
    { id: 4, name: "Shoes", priceString: "80 $", price: 80 },
  ],
};

export const actions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

export function cartReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.item.id),
      };
    default:
      return state;
  }
}
