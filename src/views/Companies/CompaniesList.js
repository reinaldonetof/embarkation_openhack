import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent
} from "@material-ui/core";

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    margin: 10
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#f00"
  }
}));

const CompaniestList = () => {
  const classes = useStyles();

  const [products] = useState(mockData);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={3} >
          {products.map(product => (
            <Grid item key={product.id} justify="center" xs>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title={product.title}
                  subheader={product.date}
                />
                <CardMedia
                  className={classes.media}
                  image={product.imageUrl.img1}
                />
                <CardMedia
                  className={classes.media}
                  image={product.imageUrl.img2}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CompaniestList;
