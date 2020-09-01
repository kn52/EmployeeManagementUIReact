import axios from 'axios'; 

const BASE_URL='https://localhost:44300';

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
	 
	 editEmployee = (employeeData) => {
         return axios({
             method:'PUT',
			 data:employeeData,
             url:`${BASE_URL}/api/employee`
         });
     }
	 
	 deleteEmployee = (id) => {
         return axios({
             method:'DELETE',
             url:`${BASE_URL}/api/employee/${id}`
         });
     }
}

export default new EmployeeService();