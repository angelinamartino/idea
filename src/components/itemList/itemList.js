import React from "react";
import Item from "../item/item";

export const ItemList = (props) => {  
  return (
    <div>
      {props.arrayItems.map(producto=> {
          return<Item titulo={producto.titulo}  descripcion={producto.descripcion} precio={producto.precio}/>
      })}
    </div>
  );
}

export default ItemList;
