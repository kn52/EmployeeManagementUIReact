import React, { useEffect } from 'react';
import '../css/DashBoard.css';
import '../css/Employee.css';
import DisplayData from './DisplayData';
import DisplayDialogBox from '../util/DisplayDialogBox';
import DisplayAppBar from '../util/DisplayAppBar';
import Button from '@material-ui/core/Button';
import Add from '../images/svg/Add.svg'
import { useHistory } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

export default function DashBoard () {

	const history = useHistory();

	const [employeeData,setEmployeeData] = React.useState([]);
	
	const [open, setOpen] = React.useState(true);

	const handleClickOpen = (employeeId) => {
		setOpen(true);
	};

	const handleClose = (employeeId) => {
		console.log("Close "+ employeeId);
		setOpen(false);
		handleDelete(employeeId);
	};
	
	const handleAddEmployee = () => {
		
		history.push({
			pathname:'/employee/add',
			state:{data:''}
		});
	}
	
	const handleEdit = (employee) => {
		history.push({
			pathname:'/employee/edit',
			state: {data : employee}
		});
	}
	
	const getEmployeeData = () => {
		EmployeeService.getAllEmployee().then((res) => {
			setEmployeeData(res.data.data);
		})
		.catch((err) => {
			console.log(err);
		})
	}
	
	const handleDelete = (employeeId) => {
		console.log("Delete "+ employeeId);
		EmployeeService.deleteEmployee(employeeId).then((res) => {
			getEmployeeData();
		})
		.catch((err) => {
			console.log(err);
		})
	}
	
	let message = "";
	
	useEffect(()=> {
		getEmployeeData();	
	},[]);

	return (
		<>
			<div className="employee_child_title">
				<DisplayAppBar title='Greeting App'/>
			</div>
			<div id="employee_child_container">
				<div className="employee">
					<DisplayDialogBox deleteMessage="Are you sure to delete employee with employee ID: " onclose={handleClose}/>
				</div>
				<div className="employee_child">
					<Button variant = "contained" color = "primary" 
						startIcon={<img src={Add} alt="" className='image_icon'/>} 
						className='employee_add_button font_family' onClick={handleAddEmployee}>Add Employee</Button>
				</div>
				<div className="employee">{message}</div>
				<div className="employee_child_table">
					<DisplayData data={employeeData} edit={handleEdit} del={handleDelete}/>
				</div>
			</div>
		</>
	);
}