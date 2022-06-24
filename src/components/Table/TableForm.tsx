import { FC } from "react"
interface Props {
  children: React.ReactNode
}
const TableForm: FC<Props> = ({ children }) => {
  return <tr style={{ position: "relative" }}>{children}</tr>
}

export default TableForm
