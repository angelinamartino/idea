import React, {useContext, useEffect} from "react";
import { CartContext } from "../Context/Context";



function Cart() {
  const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);
  useEffect(()=>{
    console.log(products)
  })
  return <div>Bienvenidos al 
  cart
          {products.map((product) => (
          <div>
          <hr></hr>
            <p>Item:{product.title}</p>
            <p>Cantidad:{product.quantity}</p>
            <hr></hr>
          </div>
        ))}
  </div>;
}

export default Cart;
