import { useDispatch } from "react-redux";
import { actions } from "../store/cartReducer";

const itemsForSale = [
  {
    id: 5,
    name: "Pepsi Max",
    priceString: "2$",
    price: 2,
  },
  {
    id: 6,
    name: "Coca Cola",
    priceString: "2$",
    price: 2,
  },
  {
    id: 7,
    name: "Private Jet",
    priceString: "2500000$",
    price: 2500000,
  },
];

export const ItemListing = () => {
  const dispatch = useDispatch();

  const addToCart = (item: any) => {
    dispatch({ type: actions.ADD_TO_CART, payload: { item } });
  };

  return (
    <div>
      <h1>Items for sale</h1>
      <div style={{ display: "flex" }}>
        {itemsForSale.map((item) => (
          <div style={{ marginRight: "1rem" }}>
            <div>Name: {item.name}</div>
            <div>Price: {item.priceString}</div>
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
