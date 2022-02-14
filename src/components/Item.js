import * as React from 'react';
import {Card,CardContent,CardMedia,Typography, CardActionArea} from '@mui/material';




const ItemComp = ({ user }) => {

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
                {user.name}
              </Typography>
              <Typography variant="body2" className="cardText">
                {user.email}
              </Typography>
                <Typography variant="body2"className="cardText">
                {user.website}
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        
      );
}

export default ItemComp

