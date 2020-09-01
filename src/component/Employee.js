import React, {useState, useEffect} from 'react';
import '../css/EmployeeDetail.css';
import Button from '@material-ui/core/Button';
import DisplayAppBar from '../utility/DisplayAppBar';
import TextField from '@material-ui/core/TextField';

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

    const handleValues = (event) => {
        event.persist();
        setValues(values=>({...values,[event.target.name]: event.target.value}));
    }

    const handleSave = () => {
			
		const employeeData={
			Name:firstname+ " " + lastname,
            Email:email,
            Password:password,
            PhoneNumber:phonenumber
        }
		
		EmployeeService.addEmployee(employeeData).then((res) => {
			console.log(res.data.data);
		})
		.catch((err) => {
			console.log(err);
		})
        setValues({ ...initialState });
    }

    const handleCancel = () => { setValues({ ...initialState }); }
    
	const location = useLocation();
	
	useEffect(() => {
		console.log(props.state);
	},[location])
	
	return (
        <>
            <div className="container">
                <div className="employee_title">
				    <DisplayAppBar title='Greeting App'/>
			    </div>
                <div className="space"></div>
                <div className="child_container">
                   <div className="div_content">
                        <span className="employee_title">Add Employee</span>
                    </div>
                    <div className="space"></div>
                    <form id="baseForm" onSubmit={handleSave} onReset={handleCancel}>
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
                                Add Employee
                            </Button>
                        </div>     
                    </form>
                </div>
            </div>            
        </>
    );
}