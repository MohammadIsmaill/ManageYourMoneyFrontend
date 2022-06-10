import { FC } from "react";
interface Props{
    children:any
}
const TableForm:FC<Props> = ({children}) => {
    return <tr style={{position:'relative'}}>{children}</tr>
}

export default TableForm;