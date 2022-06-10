import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, reset } from "../../features/user/userSlice";
import Logo from "../Logo/Logo";



const Navbar: FC = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()



  const handleLogout = ()=>{
      dispatch(logout())
      dispatch(reset());
      navigate('/login')
  }
 
  
  return (
    <header className="shadow">
      <nav className="flex align-items-center justify-content-between">
        <Logo/>
        <ul className=" flex align-items-center justify-content-center">


       
                <li className="m-2 text-xl cursor-pointer">
                <span onClick={()=>navigate("/earnings")} className="text-earnings1">
                  Earnings
                </span>
              </li>
              <li className="m-2 text-xl cursor-pointer">
                <span onClick ={()=>navigate("/payments")}  className="text-payments1">
                  Payments
                </span>
              </li>
              <li className="m-2 text-xl cursor-pointer">
                <span  onClick={()=> navigate("/debts")} className="text-debts1">
                  Debts
                </span>
              </li>
              <li className="m-2 text-xl cursor-pointer">
                <span onClick={()=>navigate("/analytics")} className="text-analytics">
                  Analytics
                </span>
              </li>
              
              <li className="m-2 text-xl cursor-pointer">
                <span  onClick={handleLogout} >
                  Logout
                </span>
              </li>
            

          
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;