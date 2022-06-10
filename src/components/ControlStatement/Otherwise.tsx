import React, { FC } from "react";

interface Props{
    children:any,
    condition?:boolean
}

const Otherwise:FC<Props> = ({children})=>{
    return <>{children}</>
}

Otherwise.defaultProps = {
    condition:true
}
export default Otherwise;