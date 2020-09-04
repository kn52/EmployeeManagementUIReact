import React, { useState } from 'react';
import '../css/Employee.css';
import Greeting from '../images/svg/GreetingApp.svg';
import Login from '../images/svg/Login.svg';
import Back from '../images/svg/Back.svg';
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
	
	const handleBack = () => {
        history.push({
          pathname:'/',
          state:''
        })
    }

	let loginText = 'Login';
	
    return (      
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
				<img src={Greeting} alt="" className="appbar_image_icon"/>
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              {props.title}
            </Typography>
			{window.location.href.includes('/employee') && <Button color="inherit" onClick={handleBack} startIcon={<img src={Back} alt="" className="image_icon"/>}>Back</Button>}
			{!window.location.href.includes('/login') && <Button color="inherit" onClick={handleLogin} startIcon={<img src={Login} alt="" className="image_icon"/>}>{loginText}</Button>}
          </Toolbar>
        </AppBar>
      </div>
    );
}