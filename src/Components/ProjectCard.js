import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import plaster from './plaster.jpg'
import snakedemo from "../Images/snakedemo.gif"


const useStyles = makeStyles({
  root: {
    height: "97%",
    width: "97%",
    textAlign: "center",
    borderRadius: 15
  },
  gif: {
    textAlign: "center",
    height: 250,
    width: 250,
    marginTop: 20,
    marginLeft: 40,
  },
  gifContainer: {},
  cardActions:{
  textAlign: "center"
}
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
        <CardMedia
        className={classes.gif}
          component="img"
          alt="Snake"
          image={snakedemo}
          title="Snake"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Snake
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Made using JS and html canvas
          </Typography>
        </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}