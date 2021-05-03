import React,{useContext, useEffect, useState} from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";
import Footer from "../footer/footer"

export default function NavMenu() {
  const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);
  
  return (
    <div>
      <Link to={"/"}>          
      <p>Navegación</p>
      </Link> 
      <Link to={'/cart'}>
      Carrito <span>{productsCount()}</span>
      </Link>
    <footer/>
    </div>
    
  );
}
