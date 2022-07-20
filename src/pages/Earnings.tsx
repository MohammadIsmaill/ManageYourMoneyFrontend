import { useEffect, useState } from "react"
import earningAPI from "../api/earningApi"
import Choose from "../components/ControlStatement/Choose"
import Otherwise from "../components/ControlStatement/Otherwise"
import When from "../components/ControlStatement/When"
import Loading from "../components/Loading/Loading"
import StatsBody from "../components/Stats/StatsBody"
import StatsContainer from "../components/Stats/StatsContainer"
import StatsInfo from "../components/Stats/StatsInfo"
import StatsTitle from "../components/Stats/StatsTitle"
import TableAddButton from "../components/Table/TableAddButton"
import TableContainer from "../components/Table/TableContainer"
import TableForm from "../components/Table/TableForm"
import TableHeader from "../components/Table/TableHeader"
import TableInput from "../components/Table/TableInput"
import TableRows from "../components/Table/TableRows"
import { errorMessage } from "../utils/errorMessage"
import * as notify from "../utils/notify"

const Earnings = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const clearTableInput = () => {
    setName("")
    setDate("")
    setPrice("")
  }

  const formValidated = () => {
    if (!name || !price || !date) {
      return false
    }

    return true
  }

  const getEarnings = async () => {
    try {
      setLoading(true)
      const earnings = await earningAPI.getEarnings()
      setData(earnings)
    } catch (error) {
      notify.error(errorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  const addEarning = async () => {
    try {
      if (formValidated()) {
        setLoading(true)
        await earningAPI.createEarning({ name, price, date })
        clearTableInput()
        notify.success("Earning created successfully")
      } else {
        notify.error("Please fill all the inputs!")
      }
    } catch (error) {
      notify.error(errorMessage(error))
    } finally {
      setLoading(false)
      
      getEarnings()
    }
  }

  const deleteEarning = async (id) => {
    try {
      setLoading(true)
      await earningAPI.deleteEarning(id)
      notify.success("Earning deleted successfully")
    } catch (error) {
      notify.error(error.message)
    } finally {
      setLoading(false)
      getEarnings()
    }
  }

  useEffect(() => {
    getEarnings()
  }, [])

  return (
    <>
      <StatsContainer>
        <StatsTitle text='Earnings' className='text-earnings1 my-1' />
        <StatsBody className='text-earnings1'>
          <StatsInfo data={data} className='text-earnings2' />
        </StatsBody>
      </StatsContainer>

      <TableContainer className='table-earnings'>
        <TableHeader />

        <Choose>
          <When condition={!loading}>
            <tbody>
              <TableForm>
                <TableInput
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TableInput
                  type='number'
                  placeholder='Price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <TableInput
                  type='date'
                  placeholder='Date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <TableAddButton onClick={addEarning} />
              </TableForm>
              <TableRows rows={data} handleRowDelete={deleteEarning} />
            </tbody>
          </When>
          <Otherwise>
            <Loading text={"Loading..."} />
          </Otherwise>
        </Choose>
      </TableContainer>
    </>
  )
}

export default Earnings
