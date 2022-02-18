import React, { useState } from "react";
import {Card,CardContent,CardMedia,Typography, CardActionArea, CardActions } from '@mui/material';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom'
import './style.css';


const ItemDetail = ({ item }) => {
  const [IsAdded, setIsAdded] = useState(true);
 
  //quantityToAdd hace referencia al parámetro 'counter' pasado en ItemCount
  function onAdd(quantityToAdd){
    if(quantityToAdd > 0){
      setIsAdded(false)
      console.log(`Añadiste ${quantityToAdd} unidad/es del producto ${item.name}`);

    }else{
        console.log("No hay productos para añadir")
    }
  }
    return (
      <>
        <Card sx={{ maxWidth: 345 , marginTop:10, marginBottom:3}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://www.woodwood.com/images/23077/da3920-492-phsym003-2000-3.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.email}
              </Typography>
                <Typography variant="body2" color="text.secondary">
                {item.website}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          </CardActions>
        </Card>

        {IsAdded ? (
                  <div>
                  <ItemCount stock={5} initial={0} onAdd={onAdd}/>
                  </div>
        ) : ( <Link className='btn-section_child' to={'/cart'}>Finalizar compra</Link>)
        }

      </>

      );
}

export default ItemDetail;