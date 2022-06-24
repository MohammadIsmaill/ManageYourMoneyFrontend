import {FC} from "react";
interface Props{
    children:React.ReactNode;
    className:string;
}
const StatsBody:FC<Props> = ({children,className}) =>{
    return <h4 className={className}>{children}</h4>
}

export default StatsBody;