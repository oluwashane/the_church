import {Grid, CardMedia, CardActionArea} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/styles'
import '../assets/styles/events.css'
import crowd from '../assets/images/churchPic1.jpeg'

const useStyles = makeStyles(() => ({
  media: {
    height: 200,
  },
  gridP: {
    margin: "auto",
    width: "80%",
    padding: "1em"
  }
}));

const Events = () => {
  const classes = useStyles();
  return (
    <div className="root">
      <div className="header">
        <h1>Upcoming Events</h1>
      </div>
      <Grid container spacing={2} className={classes.gridP}>
        <Grid item xs={12} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
            image={crowd}
            title="Contemplative Reptile"
            />
              <CardContent>
                <h1>What is on your mind</h1>
                <p>Hello world</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
            image={crowd}
            title="Contemplative Reptile"
            />
              <CardContent>
                <h1>What is on your mind</h1>
                <p>Hello world</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
            image={crowd}
            title="Contemplative Reptile"
            />
              <CardContent>
                <h1>What is on your mind</h1>
                <p>Hello world</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Events
