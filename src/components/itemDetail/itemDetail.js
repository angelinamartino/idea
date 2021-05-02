import React, { useState, useEffect, useContext } from "react";

import { CartContext } from "../Context/Context";
import ItemCount from "../itemCount/itemCount";


function ItemDetail(props) {
  const [count, setCount] = useState(0);
  const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);

  function giveMeCount(c) {
    setCount(c);
  }

  return (
    <div>
        <li>Precio: {props.price}</li>
        <li>Condicion: {props.condition}</li>
        <img src={props.thumbnail}></img>



      <ItemCount
        func={giveMeCount}
        nombre={props.nombre}
        precio={props.precio}
      />
      <input onClick={()=>addProduct(props.nombre, count)} type="button" value={`Añadir al carrito ${count}`}/>
    </div>
  );
}
export default ItemDetail;
