import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  root1: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
      
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Avatar>H</Avatar>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Typography  variant="h6" color="inherit" noWrap >
        Harry Potter
        21 Jan 2020 10 : 30 am
       HP Created new client GCOMM.
          </Typography>
        <Avatar>H</Avatar>
        
        </Paper>
      </Grid>
      
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Typography  variant="h6" color="inherit" noWrap >
        Harry Potter
        21 Jan 2020 10 : 30 am
       HP Created new client GCOMM.
          </Typography>
        <Avatar>H</Avatar>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Typography  variant="h6" color="inherit" noWrap >
        Harry Potter
        21 Jan 2020 10 : 30 am
       HP Created new client GCOMM.
          </Typography>
        <Avatar>H</Avatar>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Typography  variant="h6" color="inherit" noWrap >
        Harry Potter
        21 Jan 2020 10 : 30 am
       HP Created new client GCOMM.
          </Typography>
        <Avatar>H</Avatar>
        </Paper>
      </Grid>
      
    </Grid>
  </div>
);
    // <div className={classes.root}>
    //   <Avatar>H</Avatar>
    // </div>
    

    
  
}