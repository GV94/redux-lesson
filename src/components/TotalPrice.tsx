import { useSelector } from "react-redux";
import { selectTotalPrice } from "../store/selectors";

export const TotalPrice = () => {
  const totalPrice = useSelector(selectTotalPrice);
  return <div>Total: {totalPrice}$</div>;
};
