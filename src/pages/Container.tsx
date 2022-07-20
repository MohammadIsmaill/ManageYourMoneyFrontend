import Navbar from "../components/Layout/Navbar";
import { getCurrentComponent } from "../utils/pathUtils";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import * as notify from "../lib/notify"
import { useEffect } from "react";

const CurrentComponent = ({path}) => {
    const {user} = useAppSelector((state)=>state.user)
    const navigate = useNavigate()

    const authorizeUser = () => {
        if(!user){
            navigate("/login");
            notify.error("You should be first logged in!")
        }
    }

    useEffect(() => {   
        authorizeUser();
     }, [])
    
    return <>{user && getCurrentComponent(path.pathname)}</>
}

const Container = () =>{
    const location = useLocation();
    return(
        <>
        <Navbar/>
        <div className="flex align-items-center justify-content-center flex-col my-1">
            <CurrentComponent path={location} />
        </div>
        </>

    )
}

export default Container;