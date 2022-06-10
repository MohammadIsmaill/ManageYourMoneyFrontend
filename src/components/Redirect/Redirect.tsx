import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = ({path}) => {
    const navigate = useNavigate()

    useEffect(()=>{
        navigate(path)
    },[])
    
    return <></>
}

export default Redirect;