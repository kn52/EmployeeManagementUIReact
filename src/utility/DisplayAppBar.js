import React from 'react';
import '../css/Employee.css';
import Greeting from '../images/svg/GreetingApp.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily:'Cambria',
  },
}));

export default function DisplayAppBar (props) {
 
    const classes = useStyles();
    return (
      
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}