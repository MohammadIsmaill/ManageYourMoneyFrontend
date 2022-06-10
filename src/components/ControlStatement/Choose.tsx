import {FC,useEffect} from "react";
interface Props{
    children:any
}

const Choose:FC<Props> = ({children})=>{
   useEffect(() => {
     console.log(children)
   }, [])
   
    return (
        <>{children.find((item:any)=> item.props.condition == true)}</>
        
    )
}

export default Choose;