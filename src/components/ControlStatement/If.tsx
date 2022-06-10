import {FC} from "react";
interface Props{
    condition:Boolean,
    children:any
}
const If:FC<Props> = ({condition,children})=>{
    return(
        <>
        {condition && children}
        </>
    )
  
}
export default If;