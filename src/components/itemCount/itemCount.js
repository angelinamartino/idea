import React, { useState, useEffect } from "react";

export default function ItemCount(props) {
  const [count, setCount, onAdd] = useState(0);

  useEffect(() => {
      if (count < 0) {setCount(0);} 
      else {if (count > 10) {setCount(10);}
    }
    props.func(count);},[count]);

  return (
    <div>
      <li>{props.title}</li>
      <li>{props.price}</li>
      <input type="button" value="+" onClick={() => setCount(count + 1)} />
      {count}
      <input type="button" value="-" onClick={() => setCount(count - 1)} />
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
}
