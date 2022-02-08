// import * as React from 'react';
// import {Card,CardContent,CardMedia,Typography, Button, CardActionArea, CardActions } from '@mui/material';
// import ItemCount from "./ItemCount";

// function onAdd(counter){
//   if(counter > 0){
//       console.log(`Añadiste ${counter} producto/s`);
//   }
//   else{
//       console.log("No hay productos para añadir")
//   }

// }

// const ItemComp = ({ user }) => {

//     return (
//         <Card className='card'>
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="500"
//               image="https://www.woodwood.com/images/23077/da3920-492-phsym003-2000-3.jpg"
//               alt="t-shirt"
//             />
//             <CardContent >
//               <Typography gutterBottom variant="h5" component="div" className="cardText">
//                 {user.name}
//               </Typography>
//               <Typography variant="body2" className="cardText">
//                 {user.email}
//               </Typography>
//                 <Typography variant="body2"className="cardText">
//                 {user.website}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <>
//             <div>
//                 <ItemCount stock={5} initial={0} onAdd={onAdd}/>
//             </div>
//           </>
//           <CardActions>
//             <Button size="small" color="primary">
//               Ver Detalles
//             </Button>
//           </CardActions>

//         </Card>
        
//       );
// }

// export default ItemComp

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ItemComp = ({ user }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://media.istockphoto.com/vectors/front-view-of-mens-black-tshirt-mockup-on-dark-background-short-on-vector-id1002664032?k=20&m=1002664032&s=170667a&w=0&h=PmHO8KhcNEjy8DeNKRjWcLYGCbd73EJVQD9b3r2ZSBs="
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
            <Button size="small" color="primary">
              Ver Detalles
            </Button>
          </CardActions>
        </Card>
      );
}

export default ItemComp
