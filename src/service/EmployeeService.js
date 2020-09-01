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
}

export default new EmployeeService();