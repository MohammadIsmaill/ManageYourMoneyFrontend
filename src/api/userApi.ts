import axios from "axios";

import {API_URLS} from "../routes"

const register = async(data) =>{
    const response = await axios.post(API_URLS.userURL + 'register',data)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data;
}

const login = async(data)=>{
    const response = await axios.post(API_URLS.userURL + 'login',data)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data;
}

const logout = ()=>{
    localStorage.removeItem('user')
}

const userApi = {
    register,
    logout,
    login
}

export default userApi