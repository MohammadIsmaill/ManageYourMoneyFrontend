import { useEffect, useState } from "react"
import debtAPI from "../api/debtApi"
import * as notify from "../lib/notify"
import TableRows from "../components/Table/TableRows"
import TableForm from "../components/Table/TableForm"
import TableInput from "../components/Table/TableInput"
import TableAddButton from "../components/Table/TableAddButton"
import TableHeader from "../components/Table/TableHeader"
import StatsContainer from "../components/Stats/StatsContainer"
import StatsTitle from "../components/Stats/StatsTitle"
import StatsBody from "../components/Stats/StatsBody"
import StatsInfo from "../components/Stats/StatsInfo"
import { errorMessage } from "../utils/errorMessage"
import Otherwise from "../components/ControlStatement/Otherwise"
import Loading from "../components/Loading/Loading"
import Choose from "../components/ControlStatement/Choose"
import When from "../components/ControlStatement/When"
import TableContainer from "../components/Table/TableContainer"

const Debts = () => {
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

  const getDebts = async () => {
    try {
      setLoading(true)
      const debts = await debtAPI.getDebts()
      setData(debts)
    } catch (error) {
      notify.error(errorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  const addDebt = async () => {
    try {
      if (formValidated) {
        setLoading(true)
        await debtAPI.createDebt({ name, price, date })
        clearTableInput()
        notify.success("Debt created succesfully")
      } else {
        notify.error("Please fill all the inputs!")
      }
    } catch (error) {
      notify.error(errorMessage(error))
    } finally {
      setLoading(false)
      
      getDebts()
    }
  }

  const deleteDebt = async (id) => {
    try {
      setLoading(true)
      await debtAPI.deleteDebt(id)
      notify.success("Debt deleted succesfully")
    } catch (error) {
      notify.error(errorMessage(error))
    } finally {
      setLoading(false)
      getDebts()
    }
  }
  useEffect(() => {
    getDebts()
  }, [])

  return (
    <>
      <StatsContainer>
        <StatsTitle text='Debts' className='text-debts1 my-1' />
        <StatsBody className='text-debts1'>
          <StatsInfo data={data} className='text-debts2' />
        </StatsBody>
      </StatsContainer>

      <TableContainer className='table-debts'>
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
                  type='text'
                  placeholder='Price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <TableInput
                  type='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <TableAddButton onClick={addDebt} />
              </TableForm>

              <TableRows rows={data} handleRowDelete={deleteDebt} />
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

export default Debts
