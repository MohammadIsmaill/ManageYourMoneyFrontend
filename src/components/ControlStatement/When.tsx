import {FC} from "react"

interface Props{
    condition:boolean,
    children:any
}
const When:FC<Props> = ({condition,children})=>{
    return (
        <>
        {condition && children}
        </>
        )
}

export default When;