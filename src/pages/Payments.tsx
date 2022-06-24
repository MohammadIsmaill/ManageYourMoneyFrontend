import { useEffect, useState } from "react"
import paymentAPI from "../api/paymentApi"
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

const Payments = () => {
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

  const getPayments = async () => {
    try {
      setLoading(true)
      const payments = await paymentAPI.getPayments()
      setData(payments)
    } catch (error) {
      notify.error(errorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  const addPayment = async () => {
    try {
      if (formValidated()) {
        setLoading(true)
        await paymentAPI.createPayment({ name, price, date })
        notify.success("Payment created successfully")
        clearTableInput()
      } else {
        notify.error("Please fill all the inputs!")
      }
    } catch (error) {
      notify.error(errorMessage(error))
    } finally {
      setLoading(false)
      getPayments()
    }
  }

  const deletePayment = async (id) => {
    try {
      setLoading(true)
      await paymentAPI.deletePayment(id)
      notify.success("Payment deleted successfully")
    } catch (error) {
      notify.error(errorMessage(error))
    } finally {
      setLoading(false)
      getPayments()
    }
  }

  useEffect(() => {
    getPayments()
  }, [])

  return (
    <>
      <StatsContainer>
        <StatsTitle text='Payments' className='text-payments1 my-1' />
        <StatsBody className='text-payments1'>
          <StatsInfo data={data} className='text-payments2' />
        </StatsBody>
      </StatsContainer>

      <TableContainer className='table-payments'>
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
                <TableAddButton onClick={addPayment} />
              </TableForm>

              <TableRows rows={data} handleRowDelete={deletePayment} />
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

export default Payments
