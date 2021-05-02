import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";

function ItemDetailContainer(props) {
  const [item, setItem] = useState(false);
  let id = props.match.params.id;

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://challenge-meli-backend.herokuapp.com/api/items/${id}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          setItem(data.item);
        });
    }, 1000);
  }, []); 

  return (
    <div>
      {item ? (
        <ItemDetail  

          item={item}
          
          />
      ) : (
        <p>Trayendo información desde base de datos...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
