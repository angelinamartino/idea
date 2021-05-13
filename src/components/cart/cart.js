import React, {useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/Context";



function Cart() {
  const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);
  useEffect(()=>{
    console.log(products)
  })
  return <div> Carrito de compras
          {products.map((product) => (
          <div>
          <hr/>
            <p>Item:{product.title}</p>
            <p>Cantidad:{product.quantity}</p>
            <hr/>
          </div>
        ))}
  </div>;
}

export default Cart;
