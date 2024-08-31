import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2"
import Stat from "./Stat"
import {formatCurrency} from "../../utils/helpers"

function Stats({bookings, confirmedStays, numDays, cabinsCount}) {
  const numberOfBookings = bookings.length

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)

  const checkins = confirmedStays.length

  const occupation =
    Math.round(confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount) * 100)


  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numberOfBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="CHeck ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={occupation + '%'}
      />
    </>
  )
}

export default Stats
