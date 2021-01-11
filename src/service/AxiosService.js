import axios from "axios";

export default function AxiosService(){
}

AxiosService.prototype.get = async function getData(URL) {
    return await axios({
        method: 'get',
        url: URL,
    })
}

AxiosService.prototype.post = async function postData(URL,employeeData) {
    return await axios({
        method: 'post',
        url: URL,
        data: employeeData,
    })
}

AxiosService.prototype.put = async function updateData(URL,employeeData) {
    return await axios({
        method: 'put',        
        url: URL,
		data: employeeData,
    })
}

AxiosService.prototype.delete = async function deleteData(URL) {
    return await axios({
        method: 'delete',
        url: URL,
    })
}
