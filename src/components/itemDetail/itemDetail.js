import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/Context";
import ItemCount from "../itemCount/itemCount";


function ItemDetail(props) {
  const [count, setCount
  ] = useState(0);
  const [products, productsCount, addProduct, delProduct, getGrandTotal
  ] = useContext(CartContext);

  function giveMeCount(c) {
    setCount(c);
  }

  return (
    <div>
        <li>{props.item.categories}</li>
        <li>Precio: {props.item.price.amount}</li>
        <li>Condicion: {props.item.condition == "new" ? "Este producto es nuevo" : "usado" }</li>
        <li>Precio: {props.item.price.amount}</li>
        <li>Costo de envio: {props.item.free_shipping == true ? "Gatuito" : "A cargo del comprador" }</li>
        <img src={props.item.thumbnail}></img>
        <li>Detalle: {props.item.description}</li>


      <ItemCount
        func={giveMeCount}
        nombre={props.item.title}
        precio={props.item.price}
      />
      <input onClick={()=>addProduct(props.item.title, count)} type="button" value={`Añadir al carrito ${count}`}/>
    </div>
  );
}
export default ItemDetail;
