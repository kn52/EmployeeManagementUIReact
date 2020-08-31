import React from 'react';
import '../css/DashBoard.css';
import '../css/Employee.css';
import Grid from '@material-ui/core/Grid';
import DisplayData from './DisplayData';
import DisplayAppBar from '../utility/DisplayAppBar';
import DisplayButton from '../utility/DisplayButton';
import Add from '../images/svg/Add.svg'

export default function DashBoard () {
	return (
		<Grid container spacing = {0} xs = {12} >
			<Grid item xs = {12} className='add_employee'>
				<DisplayAppBar />
			</Grid>
			<Grid item xs = {12} className='employee'></Grid>
			<Grid item xs = {12} className='add_employee'>
				<DisplayButton imag={Add} imageclass='image_icon'  buttonclass='add_employee_button font_family' txt='Add Employee' />
			</Grid>
			<Grid item xs = {12} className='employee'></Grid>
			<Grid item xs = {12} className='add_employee'>
				<Grid item xs = {10} className='add_employee'>
					<DisplayData />
				</Grid>
			</Grid>
		</Grid>
	);
}