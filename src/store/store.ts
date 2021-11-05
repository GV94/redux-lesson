import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer, CartState } from "./cartReducer";

export interface RootState {
  cart: CartState;
}

export default configureStore({
  reducer: combineReducers({
    cart: cartReducer,
  }),
});
