import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/Context";
import ItemCount from "../itemCount/itemCount";
import "./itemDetail.css"


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
      <div className="itemD">
        <li className="itemCategoria">{props.item.categories}</li>
        <li className= "itemPrecio">Precio: {props.item.price.amount}</li>
        <li className= "itemCondicion">Condicion: {props.item.condition == "new" ? "Este producto es nuevo" : "usado" }</li>
        <li className= "itemEnvio">Costo de envio: {props.item.free_shipping == true ? "Gatuito" : "A cargo del comprador" }</li>
        <img className= "itemImagen" src={props.item.thumbnail}></img>
        <li className= "itemDetalle">Detalle: {props.item.description}</li>

      </div>
      <div>
        <ItemCount
        func={giveMeCount}
        nombre={props.item.title}
        precio={props.item.price}
        />
      
      </div>
    </div>
  );
}
export default ItemDetail;
