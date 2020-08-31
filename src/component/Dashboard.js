import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DisplayButton from '../utility/DisplayButton';
import Add from '../images/svg/Add.svg'
import '../css/Dashboard.css'
import '../css/Employee.css'

export default function DashBoard () {
	return (
	<Grid container spacing = {2} xs = {12} >
		<Grid item xs = {10} className='add_employee'>
			<DisplayButton imag={Add} imageclass='image_icon'  buttonclass='add_employee-button font_family' txt='Add Employee' />
		</Grid>
		<Grid item xs = {10} className='add_employee'>
			<DisplayData />
		</Grid>
	</Grid>
	);
}