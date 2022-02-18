import * as React from 'react';
import {Card,CardContent,CardMedia,Typography, CardActionArea} from '@mui/material';




const ItemComp = ({ item }) => {

    return (
        <Card className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="500"
              image="https://www.woodwood.com/images/23077/da3920-492-phsym003-2000-3.jpg"
              alt="t-shirt"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div" className="cardText">
                {item.name}
              </Typography>
              <Typography variant="body2" className="cardText">
                {item.email}
              </Typography>
                <Typography variant="body2"className="cardText">
                {item.website}
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        
      );
}

export default ItemComp

