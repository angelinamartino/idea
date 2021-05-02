import React,{useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";

export default function NavMenu() {
  const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);
  
  return (
    <div className="nav">
      <Link to={"/"}>
        <p>Menú de navegación</p>
        
      </Link> 
      <Link to={'/cart'}>
      Carrito <span>{productsCount()}</span>
      </Link>
    </div>
  );
}
