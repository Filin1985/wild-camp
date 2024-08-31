import styled from "styled-components"
import {useRecentBookings} from "./useRecentBookings"
import Spinner from "../../ui/Spinner"
import {useRecentStays} from "./useRecentStays"
import {useCabins} from "../cabins/useCabins"
import Stats from "./Stats"

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
  const {isLoading, bookings} = useRecentBookings()
  const {stays, confirmedStays, isLoadingStays, numDays} = useRecentStays()
  const {cabins, isLoading: isLoadingCabins} = useCabins()

  if (isLoading || isLoadingStays || isLoadingCabins) return <Spinner />

  console.log(bookings)

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinsCount={cabins.length}
      />
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
