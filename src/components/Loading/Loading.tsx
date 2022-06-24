import {FC} from "react"
interface Props{
  text:string;
}

const Loading:FC<Props> = ({ text }) => {
  return (
    <h1
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      {text}
    </h1>
  );
};

export default Loading;
