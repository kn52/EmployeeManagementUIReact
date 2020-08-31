import React from 'react';
import Button from '@material-ui/core/Button';

export default function DisplayButton (props) {
	return(
		<>
			<Button variant = "contained" color = "primary" 
			startIcon={<img src={props.imag} alt="" className={props.buttonclass}/>} className={props.buttonclass}>props.txt</Button>
		</>
	);
}