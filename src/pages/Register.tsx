import { useState,useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Logo from "../components/Logo/Logo";
import Link from "../components/Link/Link";
import { register, reset } from "../features/user/userSlice";
import * as notify from "../lib/notify"
const Register = () =>{

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {isSuccess,isError,user,isLoading,message} = useAppSelector((state)=>state.user)
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("");

    function handleClick(e){
        e.preventDefault();
        if(!name || !email || !password)
        notify.error("Please fill all inputs!")
        else 
            dispatch(register({name,email,password}))
    }
   
    useEffect(() => {
        
        if(isError){
            notify.error(message)
        }

        if(isSuccess || user){
            navigate('/payments')
        }

        return ()=>{
            dispatch(reset())
        }
      
    }, [isError,isSuccess,user,message,dispatch])
    
    if(isLoading){
        return (
        <div className="flex align-items-center justify-content-center flex-col" style={{height:"100vh"}}>
            <h1>Loading...</h1>
        </div>
        )
    }
    return (

        <div className="flex align-items-center justify-content-center flex-col gap-2" style={{height:"100vh"}}>
            <Logo/>
            <form className="flex align-items-center justify-content-center flex-col gap-2" >
                <input type="text" className="form-input" name="name" id="name"  placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" className="form-input" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className="form-input" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="btn-primary" onClick={handleClick}>Register</button>
            </form>

            <p>Have an account? <Link navigateTo="/login" className="link-primary" text="Login"/> </p>
        </div>
       
    )
}

export default Register;