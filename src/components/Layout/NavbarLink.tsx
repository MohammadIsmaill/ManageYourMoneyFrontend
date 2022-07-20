import { useNavigate } from "react-router-dom";

const NavbarLink = ({text,route,className}) => {

    const navigate = useNavigate();
    return <li className='m-2 text-xl cursor-pointer'>
    <span
      onClick={() => navigate(route)}
      className={className}
    >
      {text}
    </span>
  </li>
}

export default NavbarLink;