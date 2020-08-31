import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Add from '../images/svg/Add.svg'

export default function DashBoard () {
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