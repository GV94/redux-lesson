import { useDispatch } from "react-redux";
import { useCartItems } from "../hooks/useCartItems";
import { actions } from "../store/cartReducer";
import { TotalPrice } from "./TotalPrice";

export const Cart = () => {
  const items = useCartItems();

  const dispatch = useDispatch();

  const removeFromCart = (item: any) => {
    dispatch({
      type: actions.REMOVE_FROM_CART,
      payload: { item },
    });
  };

  return (
    <div style={{ width: "500px" }}>
      <h1>Cart</h1>
      <TotalPrice />
      <div>
        {items.map((item: any) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              marginBottom: "2rem",
              padding: "1rem",
            }}
          >
            <div>Name: {item.name}</div>
            <div>Price: {item.priceString}</div>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};
