import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logout, reset } from "../../features/user/userSlice"
import {AiOutlineClose} from "react-icons/ai"
import { FaBars } from "react-icons/fa"
import Choose from "../ControlStatement/Choose"
import Otherwise from "../ControlStatement/Otherwise"
import When from "../ControlStatement/When"
import Logo from "../Logo/Logo"
import "./style.css"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import NavbarContainer from "./NavbarContainer"
import NavbarLink from "./NavbarLink"

const Navbar: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [close, setClose] = useState<Boolean>(true)
  const { width } = useWindowDimensions()
  // console.log(window.innerWidth)
  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/login")
  }
  const bigWindowSize = () => {
    return width > 876
  }

  const sidebarClosed = () =>{
    return close == true;
  }
  return (
    <header className='shadow' style={{ width: "100%" }}>
      <nav className='flex align-items-center justify-content-between'>
        <Logo />

        <Choose>
          <When condition={bigWindowSize()}>
            <NavbarContainer>
                <NavbarLink text={"Earnings"} route={"/earnings"} className={"text-earnings"}/>
                <NavbarLink text={"Payments"} route={"/payments"} className={"text-payments"}/>
                <NavbarLink text={"Debts"} route={"/debts"} className={"text-debts1"} />
                <NavbarLink text={"Analytics"} route ={"/analytics"} className={"text-analytics"}/>
                <li className='m-2 text-xl cursor-pointer'>
                  <span onClick={handleLogout}>Logout</span>
                </li>
            </NavbarContainer>
          </When>

          <Otherwise>

            <Choose>
              <When condition={sidebarClosed()}>
                  <FaBars
                  size={25}
                  onClick={() => setClose(false)}
                  className='m-2 cursor-pointer'
                  
                />
              </When>
              <Otherwise>
              <AiOutlineClose
                  size={30}
                  onClick={() => setClose(true)}
                  className='m-2 cursor-pointer'
                  style={{zIndex:999}}
                />
                
              </Otherwise>

            </Choose>
            
          </Otherwise>
        </Choose>
      </nav>

      <div className={close ? "wrapper" : "wrapper active"}>
        <ul>
          <li>
            <div
              onClick={(e) => {
                e.preventDefault()
                navigate("/earnings")
                setClose(true)
              }}
              className='text-earnings1'
            >
              Earnings
            </div>
          </li>
          <li>
            <div
              onClick={(e) => {
                e.preventDefault()
                navigate("/payments")
                setClose(true)
              }}
              className='text-payments1'
            >
              Payments
            </div>
          </li>
          <li>
            <div
              onClick={(e) => {
                e.preventDefault()
                navigate("/debts")
                setClose(true)
              }}
              className='text-debts1'
            >
              Debts
            </div>
          </li>
          <li>
            <div
              onClick={(e) => {
                e.preventDefault()
                navigate("/analytics")
                setClose(true)
              }}
              className='text-analytics'
            >
              Analytics
            </div>
          </li>
          <li>
            <div onClick={handleLogout}>Logout</div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
