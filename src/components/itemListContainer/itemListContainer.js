import React, { useEffect, useState} from "react";
import ItemCount from "../itemCount/itemCount";
import ItemList from "../itemList/itemList";

export const ItemListContainer = (props) => {

    const [mochila ,setProducts] = useState([])

    useEffect(()=>{
    
    const listas = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos) 
        } ,2000)
        })

        listas.then(res=>{
            setProducts(res)
        })
    })

    const productos=[
        {
          key: 1,
          titulo:'Mochila Phamn',
          precio:'$4800',
          descripcion:'Mochila de cuero con piedras',
          img: ''
        },
        {
            key: 2,
          titulo:'Mochila Mila',
          precio:'$12500',
          descripcion:'Mochila de cuero con bolsillo al frente',
          img: ''
        },
        {
            key: 3,
          titulo:'Mochila Tini',
          precio:'$1500',
          descripcion:'Mochila de cuero con apliques',
          img: ''
        },
        {
            key: 4,
          titulo:'Mochila Dorothy',
          precio:'$4300',
          descripcion:'Mochila de cuero con volados',
          img: ''
        },
      ]
    return(
        <ItemList arrayItems={mochila}/>
    )
}