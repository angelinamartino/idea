import React, { useState, useEffect } from "react";
import Item from "../item/item"

const Category = props => {
  const [items, setItems] = useState([]);

  if (items.length > 0) {
    return items.map((p, i) => (
      <div id="itemContainer" key={{ i }}>
        <Item
          key={i}
          id={p.id}
          nombre={p.title}
          precio={p.price}
          categoria={p.categories}
        />
      </div>
    ));
  }
  return (
    <div style={{ textAlign: "left", marginLeft: "5vw" }}>
      'espere un segundo'
      <header />
    </div>
  );
};

export default Category;
