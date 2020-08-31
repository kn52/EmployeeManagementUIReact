import React from 'react';
import '../css/Employee.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Greeting from '../images/svg/GreetingApp.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft:5,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize:30,
      fontFamily: 'cambria',
      fontWeight: 'bold',
    },
  }));

export default function DisplayAppBar () {
 
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                        <img src={Greeting} className='greeting_image_icon' alt='' />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}  >
                        Greeting App
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}