import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import photo1 from '../projects/tim-cooper-XfqGuWevmvs-unsplash.png'
import photo2 from '../projects/erda-estremera-0ZxdAGG4aWU-unsplash.png'
import photo3 from '../projects/deanna-j-3GZlhROZIQg-unsplash.png'
import photo4 from '../projects/fiona-smallwood-rA2t29hZj1s-unsplash.png'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import addVote from '../actions/actions'
import '../index.css'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      fontFamily: 'Montserrat',
    },
    button: {
        margin: theme.spacing(1),
      },
  }));

export default function Photocard(){
    
    const classes = useStyles()
        
        return (
            <div className={classes.root}>
                        <Paper className={classes.paper}>What project proposal are you most excited about?</Paper>

      <Grid container spacing={3}>
        <Grid item xs={6}>
            <Card>
        <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={photo1} title="first image" />
        <Paper className={classes.paper}>Children's Garden</Paper>
        </Card>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<FavoriteIcon />}
        href="/votes"
        target="_blank"
        onClick={addVote}
      >Vote</Button>
        </Grid>
        <Grid item xs={6}>
            <Card>
        <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={photo2} title="second image" />
        <Paper className={classes.paper}>Interurban Linear Garden</Paper>
        </Card>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<FavoriteIcon />}
        href="/votes"
        target="_blank"
        onClick={addVote}
      >Vote</Button>
        </Grid>
        <Grid item xs={6}>
            <Card>
        <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={photo3} title="third image" />
        <Paper className={classes.paper}>Gallery Connections</Paper>
        </Card>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<FavoriteIcon />}
        href="/votes"
        target="_blank"
        onClick={addVote}
      >Vote</Button>
        </Grid>
        <Grid item xs={6}>
            <Card>
        <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={photo4} title="fourth image" />
        <Paper className={classes.paper}>Woodland Walk</Paper>

        </Card>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<FavoriteIcon />}
        href="/votes"
        target="_blank"
        onClick={addVote}
      >Vote</Button>
        </Grid>
        
        </Grid>
    </div>
            )
    }

