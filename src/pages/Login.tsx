import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Link from "../components/Link/Link";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login, reset } from "../features/user/userSlice";
import * as notify from "../utils/notify"
import Logo from "../components/Logo/Logo";
const Login = () =>{

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {isSuccess,isError,user,isLoading,message} = useAppSelector((state)=>state.user)
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("");

    const handleClick = (e)=>{
        e.preventDefault()
        if(!email || !password){
            notify.error('Please fill all the inputs!')
        }
        else {
            dispatch(login({email,password}))
            
        }
    }
    useEffect(()=>{
        if(isError){
            notify.error(message)
        }

        if(isSuccess || user){
            navigate('/payments')
        }

        return ()=>{
            dispatch(reset())
        }
    },[isError,isSuccess,user,message,dispatch])

    if(isLoading){
        return (
        <div className="flex align-items-center justify-content-center flex-col" style={{height:"100vh"}}>
            <h1>Loading...</h1>
        </div>
        )
    }
    return (
        <div className="flex align-items-center justify-content-center flex-col gap-2"  style={{height:"100vh"}}>
             <Logo/>
             <form className="flex align-items-center justify-content-center flex-col gap-2">
            <input type="text" className="form-input" placeholder="Email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className="form-input" placeholder="Password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="btn-primary" onClick={handleClick}>Login</button>
        </form>

       <p>Don't have an account?  <Link navigateTo ="/register" className="link-primary" text="Register" /> </p>
        </div>
       
    )
}

export default Login;