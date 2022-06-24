import {FC} from 'react';

interface Props{
    children:React.ReactNode;
}

const StatsContainer:FC<Props> = ({children}) => {

    return(
        <div className="flex align-items-center justify-content-center flex-col" style={{margin:"20px"}}>
         {children}
        </div>
    )
    
}

export default StatsContainer;