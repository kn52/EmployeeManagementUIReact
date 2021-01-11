import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
	
	const handleClose = () => {
		props.onclose(props.id);
	}
	
	return(
		<>
		  <Dialog open={props.opn} onClose={handleClose}>
			<DialogTitle className="dialog_title"><img src={Question} alt='' className="dialogbox_image_icon"/></DialogTitle>
			<DialogContent>
			<DialogContentText>
				{props.deleteMessage}
			</DialogContentText>
			</DialogContent>
			<DialogActions className="dialog_action">
				<Button onClick={handleClose} className={classes.buttonColor}>
					<img src={Approved} alt='' className="approved_image_icon"/>
				</Button>
				<Button onClick={handleClose} className={classes.buttonColor}>
					<img src={Cancel} alt='' className="cancel_image_icon"/>
				</Button>
			</DialogActions>
		  </Dialog>
    </>
	)
}