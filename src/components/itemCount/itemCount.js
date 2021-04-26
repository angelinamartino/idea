import React, {useState, useEffect} from 'react';
import './itemCount.css';

export const ItemCount = (props) => {

      const [count, setCount] = useState(0);
    
      function controlStock (cantidadSeleccionada) {
        if(cantidadSeleccionada<1){
            return 1
        } 
        if (cantidadSeleccionada>20){
            return 20
        }
        return cantidadSeleccionada
      }

      return (
    <div>
     <p>Agregar al carrito {count} productos</p>
     <button onClick={() => setCount(controlStock(count + 1))} >
      +
     </button> 
     <button onClick={() => setCount(controlStock(count - 1))}>
      -
     </button>

     </div>
   );
}