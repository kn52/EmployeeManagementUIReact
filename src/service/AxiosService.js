import axios from "axios";

export default function AxiosService(){
}

AxiosService.prototype.get = function getData(URL) {
    return axios({
        method: 'get',
        url: URL,
    })
}

AxiosService.prototype.post = function postData(URL,employeeData) {
    return axios({
        method: 'post',
        url: URL,
        data: employeeData,
    })
}

AxiosService.prototype.put = function updateData(URL,employeeData) {
    return axios({
        method: 'put',        
        url: URL,
		data: employeeData,
    })
}

AxiosService.prototype.delete = function deleteData(URL) {
    return axios({
        method: 'delete',
        url: URL,
    })
}
