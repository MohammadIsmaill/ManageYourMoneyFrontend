import { IoMdAddCircle } from "react-icons/io"
import { FC } from "react"

interface Props {
  onClick: () => void
}

const TableAddButton: FC<Props> = ({ onClick }) => {
  return (


    <td style={{position:"relative"}}>
       <button onClick={()=>onClick()}className="button add-button">Add</button>

    </td>
   
  )
}

export default TableAddButton
