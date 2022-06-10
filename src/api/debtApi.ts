import request from "../utils/request"
import { API_URLS } from "../routes"


const createDebt = async(data) => {
    const response = await request().post(API_URLS.debtURL, data)
    return response.data;
}

const getDebts = async()=>{
    const response = await request().get(API_URLS.debtURL)
    return response.data;
}

const deleteDebt = async(id)=>{
    const response = await request().delete(`${API_URLS.debtURL}/${id}`)
    return response.data;
}
const debtAPI = {
    createDebt,
    getDebts,
    deleteDebt
}

export default debtAPI