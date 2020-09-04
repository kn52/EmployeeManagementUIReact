import React from 'react';
import '../css/Employee.css';
import Greeting from '../images/svg/GreetingApp.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

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
 
    const history = useHistory();

    const classes = useStyles();
    
    const handleLogin = () => {
        history.push({
          pathname:'/employee/login',
          state:''
        })
    }

    return (      
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              {props.title}
            </Typography>
            <Button color="inherit" onClick={handleLogin}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}