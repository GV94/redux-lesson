import { FC } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { Cart } from "./components/Cart";
import { ItemListing } from "./components/ItemListing";
import store from "./store/store";

const Container = styled.div``;

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Container>React Boilerplate</Container>
      <h1>Super Amazing Webshop!</h1>
      <Cart />
      <ItemListing />
    </Provider>
  );
};
