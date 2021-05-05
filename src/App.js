import React from "react";
import './App.css';
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CartContextProvider from "./components/Context/Context";
import Cart from './components/cart/cart';
import Layout from './components/layout/layout'
import Footer from './components/footer/footer'


function App() {
  return (


<div>
      <CartContextProvider>
        <BrowserRouter>
          <Layout/>
            <Switch>
              <Route exact path="/" component={ItemListContainer} />
              <Route path="/itemdetail/:id" component={ItemDetailContainer} />
              <Route path="/cart" component={Cart} />
            </Switch>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;