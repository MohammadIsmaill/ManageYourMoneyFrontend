import request from "../lib/request"
import { API_URLS } from "../routes"


const createEarning = async(data) => {
    const response = await request().post(API_URLS.earningURL, data)
    return response.data;
}

const getEarnings = async()=>{
    const response = await request().get(API_URLS.earningURL)
    return response.data;
}

const deleteEarning = async(id)=>{
    const response = await request().delete(`${API_URLS.earningURL}/${id}`)
    return response.data;
}
const earningAPI = {
    createEarning,
    getEarnings,
    deleteEarning
}

export default earningAPI