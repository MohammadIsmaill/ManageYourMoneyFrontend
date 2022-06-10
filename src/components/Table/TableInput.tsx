import { useEffect,FC } from "react";
interface Props{
    type:string;
    placeholder?:string;
    value:string;
    onChange:any;
}
const TableInput:FC<Props> = ({type,placeholder,value,onChange}) => {
    useEffect(()=>{

    },[])
    return <td><input className="table-input" type={type} placeholder={placeholder} value={value} onChange={(e)=>onChange(e)}/></td>
}

export default TableInput;