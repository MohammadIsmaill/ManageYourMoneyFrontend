import { useEffect ,FC} from "react";
import { useNavigate } from "react-router-dom";

interface Props{
    path:string;
}

const Redirect:FC<Props> = ({path}) => {
    const navigate = useNavigate()

    useEffect(()=>{
        navigate(path)
    },[])
    
    return <></>
}

export default Redirect;