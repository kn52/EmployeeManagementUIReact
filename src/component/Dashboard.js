import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Add from './Add.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function DashBoard () {
	const classes = useStyles();
	return (
	<Grid container spacing = {2} xs = {12} >
		<Grid item xs = {10} style = {{display:"flex",justifyContent:"space-between", border:"1px solid white", width:"300px"}}>
			<Button variant = "contained" color = "primary" style = {{fontSize:"20px",fontFamily:"Cambria",fontWeight:"bold",width:"250px", height:'50px'}} 
			startIcon={<img src={Add} alt="" width="30px" height="30px"/>} >Add Employee</Button>
			<Button variant = "contained" color = "primary" style = {{display:"none", fontSize:"20px",fontFamily:"Cambria",fontWeight:"bold",width:"150px", height:'50px'}} >
				Login</Button>
		</Grid>
	</Grid>
	);
}