import React from "react";
import { useState, useEffect } from "react";

//Creo contexto
export const CartContext = React.createContext([]);


//Creo la "clase" context con sus funciones y variables a compartir
const CartContextProvider = props => {
  const [products, setProducts] = useState([]);

  function addProduct(product, quantity){
    // Busca en el array si existe. Si esta no lo trae
      setProducts([...products, {'nombre':product, 'quantity': quantity  }]);
  };

  // Vaciar carrito
  function clearAll(product, quantity){
    setProducts([]);
  };


  // Suma los productos (acc = acumulador) Recorre productos y suma quantity (cantidad)
  const productsCount = () => {
    return products.reduce((acc, p) => (acc += p.quantity), 0);
  };

  // Elimina producto del array. Busca el indice y elimina 1
  const delProduct = (id) => {
    products.splice(products.findIndex((p) => p.id === id), 1);
    setProducts([...products]);
  };


  // Importe total
  const getGrandTotal = () => {
    return products.reduce((acc, p) => (acc += p.price * p.quantity), 0);
  };


  return (
    <CartContext.Provider value={[products, productsCount, clearAll, addProduct, delProduct, getGrandTotal]}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;