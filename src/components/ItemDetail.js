import React from "react";

const ItemDetail = ({ user }) => {
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
          </CardActions>
        </Card>
      );
}

export default ItemDetail