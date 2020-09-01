import React, { useEffect } from 'react';
import '../css/DashBoard.css';
import '../css/Employee.css';
import history from "../utility/history";
import DisplayData from './DisplayData';
import DisplayAppBar from '../utility/DisplayAppBar';
import Button from '@material-ui/core/Button';
import Add from '../images/svg/Add.svg'
import EmployeeService from '../service/EmployeeService';

export default function DashBoard () {

	const [employeeData,setEmployeeData] = React.useState([]);
	
	const handleAddEmployee = () => {
		history.push({
			pathname:'/employee/add',
			state:{data:''}
		});
	}
	
	const handleEdit = (employee) => {
		console.log(employee);
		history.push({
			pathname:'/employee/edit',
			state: {data : employee}
		});
	}
	
	const getEmployeeData = () => {
		EmployeeService.getAllEmployee().then((res) => {
			console.log(res.data.data);
			setEmployeeData(res.data.data);
		})
		.catch((err) => {
			console.log(err);
		})
	}
	
	const handleDelete = (employeeId) => {
		EmployeeService.deleteEmployee(employeeId).then((res) => {
			console.log(res.data.data);
		})
		.catch((err) => {
			console.log(err);
		})
		getEmployeeData();
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
				<div className="employee"></div>
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