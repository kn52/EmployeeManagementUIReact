import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Question from '../images/svg/Question.svg';
import Cancel from '../images/svg/Cancel.svg';
import Approved from '../images/svg/Approved.svg';
import '../css/DisplayDialogBox.css';

const useStyles = makeStyles({
	buttonColor: {
		backgroundColor: '#3f51b5'
	}		
});

export default function DialogBox (props) {
	
	const classes = useStyles();
	
	const [selected,setSelectedValue]=useState('');
	
	const handleClickClose = (value) => {
		setSelectedValue(value);
		var qwe = {selected};
		console.log(qwe);
		if (false){
			props.del(props.Id);
		}
		else{
			props.onclose();
		}
	}
	
	return(
		<>
		  <Dialog open={props.opn} onClose={handleClickClose}>
			<DialogTitle className="dialog_title"><img src={Question} alt='' className="dialogbox_image_icon"/></DialogTitle>
			<DialogContent>
			<DialogContentText>
				{props.deleteMessage}
			</DialogContentText>
			</DialogContent>
			<DialogActions className="dialog_action">
				<Button onClick={handleClickClose("approved")} className={classes.buttonColor}>
					<img src={Approved} alt='' className="approved_image_icon"/>
				</Button>
				<Button onClick={handleClickClose("cancel")} className={classes.buttonColor}>
					<img src={Cancel} alt='' className="cancel_image_icon"/>
				</Button>
			</DialogActions>
		  </Dialog>
    </>
	)
}