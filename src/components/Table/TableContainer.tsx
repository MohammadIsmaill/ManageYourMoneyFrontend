import { FC } from "react"

interface Props {
  children: React.ReactNode
  className: string
}
const TableContainer: FC<Props> = ({ className, children }) => {
  return (
    <div className='table-container'>
      <table className={className} style={{ margin: "0 auto" }}>
        {children}
      </table>
    </div>
  )
}

export default TableContainer
