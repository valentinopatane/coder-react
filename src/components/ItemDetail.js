import React, { useState, useContext } from "react";
import {Card,CardContent,CardMedia,Typography, CardActionArea, CardActions } from '@mui/material';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom'
import './style.css';
import { ItemsContext } from './context/ItemsContext'


const ItemDetail = ({ item }) => {
  //Estado interno maneja al botón finalizar compra
  const [IsAdded, setIsAdded] = useState(true);
  //Context, llama a función addItem
  const { addItem } = useContext(ItemsContext);
  //quantityToAdd hace referencia al parámetro 'counter' pasado en ItemCount
  function onAdd(quantityToAdd){
    if(quantityToAdd > 0){
      setIsAdded(false)
      console.log(`Añadiste ${quantityToAdd} unidad/es del producto ${item.name}`);
      //Función proveniente de context, envía al item y la cantidad.
      addItem(item, quantityToAdd);
    }else{
        console.log("No hay productos para añadir")
    }
  }
    return (
      <>
        <div className="item_detail">
          <div className="item_detail_img">
            <img src={item.image}></img>
          </div>
          <div className="item_detail_text">
            <h1>{item.name}</h1>
            <p>Price: ${item.price}</p>
            <p>Stock: {item.stock}</p>
                    {/* Operador condicional muestra el contador o el botón */}
        {IsAdded ? (
                  <div>
                  <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
                  </div>
        ) : ( <Link className='btn-section_child' to={'/cart'}>Finalizar compra</Link>)
        } 
          </div>
        </div>


      

      </>

      );
}

export default ItemDetail;