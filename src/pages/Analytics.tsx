import Line from "../components/Analytics/Graph"
import { useEffect, useState } from "react"
import paymentAPI from "../api/paymentApi"
import * as notify from "../utils/notify"
import { COLORS } from "../colors"
import { errorMessage } from "../utils/errorMessage"
import earningAPI from "../api/earningApi"
import debtAPI from "../api/debtApi"
import Choose from "../components/ControlStatement/Choose"
import When from "../components/ControlStatement/When"
import Otherwise from "../components/ControlStatement/Otherwise"
import Loading from "../components/Loading/Loading"

const dataForYear = (data, year) => {
  const dataPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  data.map((d) => {
    const date = d.date.split("-")
    console.log(date[0] === year)
    if (date[0] === year) {
      switch (date[1]) {
        case "01":
          dataPerMonth[0] += d.price
          break
        case "02":
          dataPerMonth[1] += d.price
          break
        case "03":
          dataPerMonth[2] += d.price
          break
        case "04":
          dataPerMonth[3] += d.price
          break
        case "05":
          dataPerMonth[4] += d.price
          break
        case "06":
          dataPerMonth[5] += d.price
          break
        case "07":
          dataPerMonth[6] += d.price
          break
        case "08":
          dataPerMonth[7] += d.price
          break
        case "09":
          dataPerMonth[8] += d.price
          break
        case "10":
          dataPerMonth[9] += d.price
          break
        case "11":
          dataPerMonth[10] += d.price
          break
        case "12":
          dataPerMonth[11] += d.price
          break
        default:
          console.log("it didnt work")
      }
    }
  })

  return dataPerMonth
}

const Analytics = () => {
  const [payments, setPayments] = useState([])
  const [earnings, setEarnings] = useState([])
  const [debts, setDebts] = useState([])
  const [loading, setLoading] = useState(false)
  const [year, setYear] = useState("2022")

  const getData = async () => {
    try {
      setLoading(true)
      const payments = await paymentAPI.getPayments()
      const earnings = await earningAPI.getEarnings()
      const debts = await debtAPI.getDebts()
      setPayments(payments)
      setEarnings(earnings)
      setDebts(debts)
    } catch (error) {
      notify.error(errorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [year])

  const categories = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    " September",
    "October",
    "November",
    "December"
  ]

  const series = [
    {
      name: "Earnings",
      data: dataForYear(earnings, year),
      color: COLORS.earning
    },
    {
      name: "Payments",
      data: dataForYear(payments, year),
      color: COLORS.payment
    },
    {
      name: "Debts",
      data: dataForYear(debts, year),
      color: COLORS.debt
    }
  ]

  return (
    <>
      <div>
        <label>Year: </label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className='my-2'
        >
          <option value='1990'>1990</option>
          <option value='1991'>1991</option>
          <option value='1992'>1992</option>
          <option value='1993'>1993</option>
          <option value='1994'>1994</option>
          <option value='1995'>1995</option>
          <option value='1996'>1996</option>
          <option value='1997'>1997</option>
          <option value='1998'>1998</option>
          <option value='1999'>1999</option>
          <option value='2000'>2000</option>
          <option value='2001'>2001</option>
          <option value='2002'>2002</option>
          <option value='2003'>2003</option>
          <option value='2004'>2004</option>
          <option value='2005'>2005</option>
          <option value='2006'>2006</option>
          <option value='2007'>2007</option>
          <option value='2008'>2008</option>
          <option value='2009'>2009</option>
          <option value='2010'>2010</option>
          <option value='2011'>2011</option>
          <option value='2012'>2012</option>
          <option value='2013'>2013</option>
          <option value='2014'>2014</option>
          <option value='2015'>2015</option>
          <option value='2016'>2016</option>
          <option value='2017'>2017</option>
          <option value='2018'>2018</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
          <option value='2026'>2026</option>
          <option value='2027'>2027</option>
          <option value='2028'>2028</option>
          <option value='2029'>2029</option>
          <option value='2030'>2030</option>
          <option value='2031'>2031</option>
          <option value='2032'>2032</option>
          <option value='2033'>2033</option>
          <option value='2034'>2034</option>
          <option value='2035'>2035</option>
          <option value='2036'>2036</option>
          <option value='2037'>2037</option>
          <option value='2038'>2038</option>
          <option value='2039'>2039</option>
          <option value='2040'>2040</option>
        </select>
      </div>

      <Choose>
        <When condition={!loading}>
          <Line series={series} categories={categories} />
        </When>
        <Otherwise>
          <Loading text={"Loading..."} />
        </Otherwise>
      </Choose>
    </>
  )
}

export default Analytics
