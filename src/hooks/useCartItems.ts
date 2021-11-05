import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useCartItems = () => {
  /* useSelector is a hook that lets us get things from the redux store */
  const items = useSelector<RootState, any>((state) => state.cart.items);
  return items;
};
