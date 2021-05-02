import React from "react";
import ItemList from "../itemList/itemList";

export default function ItemListContainer(props) {
  return (
    <div className="ilc">
      <p>
        Bienvenido {props.nombre} a nuestra lista de productos recomendados para vos!
      </p>
      
      <ItemList />
    </div>
  );
}
