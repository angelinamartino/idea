import React from "react"

export const Item = (props) => { 
  return (
      <div>
        <h5>{props.titulo}</h5>
        <h5>{props.descripcion}</h5>
        <h5>{props.precio}</h5>
      </div>
  );
}

export default Item;
