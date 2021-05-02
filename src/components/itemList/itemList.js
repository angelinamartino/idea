import React, { useState, useEffect } from "react";
import Item from "../item/item";

function ItemList(props) {
  const [items, setItems] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://challenge-meli-backend.herokuapp.com/api/items?q=iphone")
        .then(response => {
          return response.json();
        })
        .then(data => {
          setItems(data.items);
        });
    }, 0);
  }, []);

  return (
    <div>
      {items ? (
        items.map((i, index) => (
         
          <Item
            id={i.id}
            key={index}
            title={i.title}
            price={i.price.amount}
            condition={i.condition}
            thumbnail={i.thumbnail}
          />
        ))
        ):(
        <p>Buscando datos...</p>
      )}
    </div>
  );
}

export default ItemList;
