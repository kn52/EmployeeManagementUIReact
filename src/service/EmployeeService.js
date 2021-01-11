import axiosservice from './AxiosService'; 

const BASE_URL=process.env.REACT_APP_BASE_URL;

class EmployeeService {

    constructor(){
        this.axiosservice = new axiosservice();
    }
    getAllEmployee = () => {
        let url = BASE_URL + `/api/employee`;
        return this.axiosservice.get(url);   
	}
	 
	getEmployeeById = (id) => {
        let url = BASE_URL + `/api/employee/${id}`;
        return this.axiosservice.get(url);
	}
	 
	addEmployee = (employeeData) => {
        let url = BASE_URL + `/api/employee`
        return this.axiosservice.post(url,employeeData);
    }
	 
	editEmployee = (employeeData) => {
        let url = BASE_URL + `/api/employee`;
        return this.axiosservice.put(url,employeeData);
    }
	 
	deleteEmployee = (id) => {
        let url = BASE_URL + `/api/employee/${id}`
        return this.axiosservice.delete(url);
    }
}

export default new EmployeeService();