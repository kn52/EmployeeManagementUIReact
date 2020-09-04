import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function DisplayTextField (props) {
	return(
		<TextField name={props.nm} label={props.lbl} type="text" variant="outlined" value={props.val}
			onChange={()=>{props.onchange(this)}}  size="small" required />
	)
} 
