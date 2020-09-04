import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function DisplaySnackBar (props) {
	
	return(
		<Snackbar open={props.opn} autoHideDuration={3000} onClose={props.onclose}>
			<MuiAlert severity={props.msgtype}>
				{props.msg}
			</MuiAlert>
		</Snackbar>
	);
}