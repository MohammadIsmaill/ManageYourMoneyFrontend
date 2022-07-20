import { TiDelete } from "react-icons/ti"
import { FC } from "react"

interface Props {
  onClick: (id: string) => void
  id: string
}
const TableDeleteButton: FC<Props> = ({ onClick, id }) => {
  return (
    // <TiDelete
    //   size={20}
    //   onClick={() => onClick(id)}
    //   style={{ color: "#EC0B43", position: "absolute", cursor: "pointer" }}
    // />
    <td style={{position:"relative"}}>
 <button className="button remove-button">
      Delete
    </button>
    </td>
   
  )
}

export default TableDeleteButton
