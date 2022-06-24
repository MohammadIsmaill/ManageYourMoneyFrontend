import { IoMdAddCircle } from "react-icons/io"
import { FC } from "react"

interface Props {
  onClick: () => void
}

const TableAddButton: FC<Props> = ({ onClick }) => {
  return (
    <IoMdAddCircle
      onClick={onClick}
      size={25}
      style={{
        position: "absolute",
        color: "#6BD425",
        cursor: "pointer"
      }}
    />
  )
}

export default TableAddButton
