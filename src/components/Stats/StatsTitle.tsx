import { FC } from "react"

interface Props {
  className: string
  text: string
}

const StatsTitle: FC<Props> = ({ className, text }) => {
  return <h1 className={className}>{text}</h1>
}

export default StatsTitle
