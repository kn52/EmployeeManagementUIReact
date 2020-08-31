import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Add from '../images/svg/Add.svg'
import '../css/DashBoard.css'

export default function DashBoard () {
	return (
	<Grid container spacing = {2} xs = {12} >
		<Grid item xs = {10} className='add_employee'>
			<Button variant = "contained" color = "primary" 
			startIcon={<img src={Add} alt="" className='add_image_icon'/>} className='add_employee-button font_family'>Add Employee</Button>
		</Grid>
	</Grid>
	);
}