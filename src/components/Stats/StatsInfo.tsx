import { useState } from "react";


const calculateTotal = (data)=>{
    let total = 0;
    data.map(d=>{
        total+=d.price;
    })

    return total;
}

const StatsInfo = ({data,className}) => {
    
    


    return (
        <>
             Total: <span className={className}>{calculateTotal(data)}L.L.</span> -
            Items:<span className={className}>{data.length}</span>
        </>
    )
}

export default StatsInfo;