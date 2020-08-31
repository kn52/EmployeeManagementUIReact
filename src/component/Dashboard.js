import React from 'react';
import '../css/DashBoard.css';
import '../css/Employee.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DisplayButton from '../utility/DisplayButton';
import DisplayData from './DisplayData';
import Add from '../images/svg/Add.svg'


export default function DashBoard () {
	return (
	<Grid container spacing = {2} xs = {12} >
		<Grid item xs = {10} className='add_employee'>
			<DisplayButton imag={Add} imageclass='image_icon'  buttonclass='add_employee_button font_family' txt='Add Employee' />
		</Grid>
		<Grid item xs = {10} className='add_employee'>
			<DisplayData />
		</Grid>
	</Grid>
	);
}