import * as React from 'react';
import {Card,CardContent,CardMedia,Typography, CardActionArea, CardActions } from '@mui/material';
import ItemCount from "./ItemCount";
import $ from "jquery";


const ItemDetail = ({ user }) => {
  function onAdd(counter){
    if(counter > 0){
        console.log(`Añadiste ${counter} producto/s`);
        $('.count').hide();
        $('.btn-section_child').show();
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
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
                <Typography variant="body2" color="text.secondary">
                {user.website}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          </CardActions>
        </Card>

        <div>
          <ItemCount stock={5} initial={0} onAdd={onAdd}/>
        </div>

      </>

      );
}

export default ItemDetail;