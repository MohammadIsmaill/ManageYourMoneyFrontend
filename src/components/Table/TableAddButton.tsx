import { IoMdAddCircle } from "react-icons/io";
const TableAddButton = ({ onClick }) => {
  return (
    <IoMdAddCircle
      onClick={onClick}
      size={25}
      style={{
        position: "absolute",
        color: "#6BD425",
        cursor: "pointer",
      }}
    />
  );
};

export default TableAddButton;
