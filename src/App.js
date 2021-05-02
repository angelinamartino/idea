import React from "react";
import Nav from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CartContextProvider from "./components/Context/Context";
import Cart from './components/cart/cart';

export default function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/itemdetail/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}
