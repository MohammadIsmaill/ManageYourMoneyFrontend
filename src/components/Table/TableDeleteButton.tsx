import { TiDelete } from "react-icons/ti"

const TableDeleteButton = ({onClick,id})=>{
    return (
        <TiDelete size={20} onClick={()=>onClick(id)} style={{color:"#EC0B43",position:"absolute",cursor:"pointer"}}/>

    )
}

export default TableDeleteButton;