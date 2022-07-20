import axios from "axios"
import {store} from "../app/store"
export default function request(requestHeaders = {}){
    let headers = {
        "Content-Type":"application/json"
    }
    if(requestHeaders){
        headers = {
            ...headers,
            ...requestHeaders
        }
    }

    const newAxios = axios.create({
        withCredentials:false,
        timeout:1000 * 60 * 5,
        headers
    })

    newAxios.interceptors.request.use((request)=>{
        console.log('Client: request sent successfully')
        const token = store.getState().user.user.token
        request.headers.Authorization = `Bearer ${token}`
        return request

    },(error)=>{
        console.log('Client: request unsucessful')
        return Promise.reject(error)
    })

    newAxios.interceptors.response.use((response)=>{
        console.log('Server: response arrived successfully')
        return response;

    },(error)=>{
        console.log('Server: response unsuccesful')
        return Promise.reject(error)
    })

    return newAxios;
}

