import { useNavigate } from "react-router-dom";
import {FC} from "react"
interface Props{
    navigateTo:string;
    className:string;
    text:string;
}

const Link:FC<Props> = ({navigateTo,className,text}) =>{
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(navigateTo)
    }

    return <span onClick={handleClick}  className={className} >{text}</span>

}

export default Link;