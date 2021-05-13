import './item.css'
import React from "react";
import { Link } from "react-router-dom";

function Item(props, onAdd) {
  return (
    <div className="item">
      <div>
        <Link to={{ pathname: `/itemdetail/${props.id}`,state: { test: "test" } }}>
          {props.title}</Link>
        <li>Precio: {props.price}</li>
        <li>Condicion: {props.condition}</li>
        <img src={props.thumbnail}></img>
      </div>
        <button onClick={onAdd}>
          Agregar al carrito</button>
      </div>
  );
}

export default Item;