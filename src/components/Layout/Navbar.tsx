import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logout, reset } from "../../features/user/userSlice"
import { FaBars } from "react-icons/fa"
import Choose from "../ControlStatement/Choose"
import Otherwise from "../ControlStatement/Otherwise"
import When from "../ControlStatement/When"
import Logo from "../Logo/Logo"
import "./style.css"
import useWindowDimensions from "../../hooks/useWindowDimensions"

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
  return (
    <header className='shadow' style={{ width: "100%" }}>
      <nav className='flex align-items-center justify-content-between'>
        <Logo />

        <Choose>
          <When condition={bigWindowSize()}>
            <ul className=' flex align-items-center justify-content-center'>
              <li className='m-2 text-xl cursor-pointer'>
                <span
                  onClick={() => navigate("/earnings")}
                  className='text-earnings1'
                >
                  Earnings
                </span>
              </li>
              <li className='m-2 text-xl cursor-pointer'>
                <span
                  onClick={() => navigate("/payments")}
                  className='text-payments1'
                >
                  Payments
                </span>
              </li>
              <li className='m-2 text-xl cursor-pointer'>
                <span
                  onClick={() => navigate("/debts")}
                  className='text-debts1'
                >
                  Debts
                </span>
              </li>
              <li className='m-2 text-xl cursor-pointer'>
                <span
                  onClick={() => navigate("/analytics")}
                  className='text-analytics'
                >
                  Analytics
                </span>
              </li>

              <li className='m-2 text-xl cursor-pointer'>
                <span onClick={handleLogout}>Logout</span>
              </li>
            </ul>
          </When>

          <Otherwise>
            <FaBars
              size={25}
              onClick={() => setClose(false)}
              className='m-2 cursor-pointer'
            />
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
