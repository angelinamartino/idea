import React,{useContext, useEffect, useState} from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";
import user from "../../components/User/user"

function NavMenu() {
  const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);
  
  return (
    <div className="navbar">
      <Link to={"/"}> <p>Inicio</p> </Link> 
      <Link to={'/cart'}> Carrito <span> {productsCount()}</span></Link>
    </div>
 
  )  ;
}

export {NavMenu};