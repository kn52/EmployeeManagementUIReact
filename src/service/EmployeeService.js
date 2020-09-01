import axios from 'axios'; 

const BASE_URL='https://localhost:44300/';

class EmployeeService {
     getAllEmployee = () => {
		 return axios({
             method:'GET',
             url:`${BASE_URL}/api/employee`
         });
     }
	 
	 getEmployeeById = (id) => {
		 return axios({
             method:'GET',
             url:`${BASE_URL}/api/employee/${id}`
         });
     }
	 
	 addEmployee = (employeeData) => {
         return axios({
             method:'POST',
			 data:employeeData,
             url:`${BASE_URL}/api/employee`
         });
     }
}

export default new EmployeeService();