import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/Context";
import { Link } from "react-router-dom"
import ItemCount from "../itemCount/itemCount";


function ItemDetail(props) {
  const [count, setCount] = useState(0);
  const [products, productsCount, clearAll, addProduct, delProduct, getGrandTotal] = useContext(CartContext);

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
        nombre={props.title}
        precio={props.price}
        />

      <input
        onClick={() => addProduct(props.title, count)}
        type="button"
        value={`agregar al carrito ${count}`}
      />
      <br/>

      <input 
        onClick={() => clearAll ()}
        type="button"
        value={`vaciar carrito`}
      />

      <Link exact to={`/category/${props.categories}`}>
        link a categoria {props.categories}
      </Link>
      </div>
    </div>
  );
}
export default ItemDetail;
