import React, {useState, useEffect} from 'react';
import '../css/EmployeeDetail.css';
import Button from '@material-ui/core/Button';
import DisplayAppBar from '../utility/DisplayAppBar';
import TextField from '@material-ui/core/TextField';
import DisplaySnackBar from '../utility/DisplaySnackBar';
import EmployeeService from '../service/EmployeeService';
import { useLocation } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function AddEmployee (props) {

    const initialState = { 
        id:'',    
        firstname:'', 
        lastname:'',
        email:'',
        password:'',
        phonenumber:'' 
    }

    const [{id, firstname, lastname, email,password,phonenumber},setValues]=useState(initialState);

	const [{message,type},setMessage]=useState({
		message:'',
		type:''
	});
	
    const [open,setOpen] = useState(false);
	
	const handleSnackbar = () => { 
		setOpen(true);
	}
	
	const handleClose = () => {
		setOpen(false);
	}
	
	const handleValues = (event) => {
        event.persist();
        setValues(values=>({...values,[event.target.name]: event.target.value}));
    }

    const handleSave = (event) => {
		if(window.location.href.includes('add')){
			handleAddEmployee(event);
		}
		else{
			handleEditEmployee(event);
		}
		handleSnackbar();
        setValues({ ...initialState });
    }

	const handleSave = (event) => {
		event.preventDefault();
		const employeeData={
			Name:firstname+ " " + lastname,
            Email:email,
            Password:password,
            PhoneNumber:phonenumber
        }
		
		EmployeeService.editEmployee(employeeData).then((res) => {
			if(res.data.data.httpstatuscode == 200){
				setMessage(res.data.data.message);
			}
		})
		.catch((err) => {
			console.log(err);
		})
		handleSnackbar();
        setValues({ ...initialState });
    }

    const handleUpdate = () => {
        const employeeData={
            Id:id,
            Name:firstname+ " " + lastname,
            Email:email,
            Password:password,
            PhoneNumber:phonenumber
        }
		
		EmployeeService.updateEmployee(employeeData).then((res) => {
			if(res.data.data.httpstatuscode == 200){
				setMessage(res.data.data.message);
			}
		})
		.catch((err) => {
			console.log(err);
		})
        setValues({ ...initialState });
    }
 
    const handleCancel = () => { setValues({ ...initialState }); }
    
	const location = useLocation();

	useEffect(() => {
	   },[location])
	
	return (
        <>
            <div className="container">
                <div className="employee_title">
				    <DisplayAppBar title='Greeting App'/>
			    </div>
                <div className="space">
					<DisplaySnackBar opn={open} onclose={handleClose} msg={message} msgtype={type}/>
				</div>
                <div className="child_container">
                   <div className="div_content">
                        <span className="employee_title">{window.location.href.includes('add')? 'Add Employee' : 'Update Employee'}</span>
                    </div>
                    <div className="space"></div>
                    <form id="baseForm" onSubmit={window.location.href.includes('add')? handleSave : handleUpdate} onReset={handleCancel}>
						<div className="div_content">
                            <TextField name="firstname" label="First Name" variant="outlined" value={firstname}
                                onChange={handleValues}  size="small" required />
                        </div>

                        <div className="space"></div>

                        <div className="div_content">
                            <TextField name="lastname" label="Last Name" variant="outlined" value={lastname}
                                onChange={handleValues} size="small" required />
                        </div>
                        <div className="space"></div>

                        <div className="div_content">
                            <TextField name="email" label="Email" variant="outlined" value={email}
                                onChange={handleValues} size="small" required />
                        </div>

                        <div className="space"></div>

                        <div className="div_content">
                            <TextField name="password" label="Password" variant="outlined" value={password}
                                onChange={handleValues} size="small" required />
                        </div>

                        <div className="space"></div>

                        <div className="div_content">
                            <TextField name="phonenumber" label="Phone Number" variant="outlined" value={phonenumber}
                                onChange={handleValues} size="small" required />
                        </div>

                        <div className="space"></div>
                            
                        <div className="div_content">
                            <Button type="submit" className="employee_button" style={{backgroundColor:'#3f51b5',color:'white'}} >
                                {window.location.href.includes('add')? 'Add Employee' : 'Update Employee'}
                            </Button>
                        </div>     
                    </form>
                </div>
            </div>            
        </>
    );
}