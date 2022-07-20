import request from "../lib/request"
import { API_URLS } from "../routes"


const createPayment = async(data) => {
    const response = await request().post(API_URLS.paymentURL, data)
    return response.data;
}

const getPayments = async()=>{
    const response = await request().get(API_URLS.paymentURL)
    return response.data;
}

const deletePayment = async(id)=>{
    const response = await request().delete(`${API_URLS.paymentURL}/${id}`)
    return response.data;
}
const paymentAPI = {
    createPayment,
    getPayments,
    deletePayment
}

export default paymentAPI