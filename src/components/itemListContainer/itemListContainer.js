import React from "react";
import ItemList from "../itemList/itemList";

export default function ItemListContainer(props) {
  return (
    <div className="itemListCont">
      <p> Bienvenido {props.nombre} a nuestro e-shop!</p>
      
      <ItemList />

    </div>
  );
}
