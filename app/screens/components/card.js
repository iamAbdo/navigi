import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardActionArea } from '@mui/material';

/* could be used now they are not */
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function MediaCard({ title, image, description}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
       <CardActionArea>
        <CardMedia
          sx={{ height: 140 }}
          image={`/app/assets/${image}`}
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>


      
        {/*

        Action can be on card click or on this actions click

        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        */}

      </CardActionArea>
    </Card>
  );
}
