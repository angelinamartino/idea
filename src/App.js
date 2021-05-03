import React from "react";
import './App.css';
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CartContextProvider from "./components/Context/Context";
import Cart from './components/cart/cart';
import { Layout } from './components/layout/layout'



function App() {
  return (


<div>
      <CartContextProvider>
        <BrowserRouter>
          <Layout>
          </Layout>
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

export default App;