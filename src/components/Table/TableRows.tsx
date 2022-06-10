import { TiDelete } from "react-icons/ti";
import TableDeleteButton from "./TableDeleteButton";


const TableRows = ({rows,handleRowDelete}) =>{
    
    return(
    <>
        {rows.map(({name,price,date,_id})=>{
           return( <tr key={_id}>
                <td>{name}</td>
                <td>{price}</td>
                <td>{date}</td>
                <TableDeleteButton  onClick={handleRowDelete} id ={_id} />               
            </tr>
        )})}
    </>
    )
}
export default TableRows;