import React from 'react';
import '../css/DashBoard.css';
import '../css/Employee.css';
import Button from '@material-ui/core/Button';

const GetButton = (det) => {
	
	let returnButton = []
	
	if (det.txt !== '' )
		returnButton = <Button variant = "contained" color = "primary" 
			startIcon={<img src={det.imag} alt="" className={det.imageclass}/>} className={det.buttonclass}>{det.txt}</Button> ;
	
	if (det.txt === '') 
		returnButton = <Button variant = "contained" color = "primary" className={det.buttonclass}><img src={det.imag} alt="" className={det.imageclass}/></Button> ;

	return returnButton;
}

export default function DisplayButton (props) {
	
	let but = GetButton(props);
	
	return(
		<>
			{but}
		</>
	);
}