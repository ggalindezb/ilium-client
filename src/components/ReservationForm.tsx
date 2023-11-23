import { useState } from 'react'
import { searchReservation } from '../services/Reservation'

interface Props {
  jwt: string
}

interface Reservation {
  id: number
  code: string
  pick_up_time: string
}

interface User {
  id: number
  email: string
  role: string
}

interface Book {
  id: number
  author: string
  title: string
  reserved: boolean
}

interface ReservationInfo {
  reservation: Reservation
  user: User
  book: Book
}

function ReservationForm(props: Props) {
  const { jwt } = props
  const [code, setCode] = useState<string>()
  const [reservationInfo, setReservationInfo] = useState<ReservationInfo>()

  const handleSearchReservation = (event) => {
    event.preventDefault()
    if(!code) return

    searchReservation(jwt, code).then(data => setReservationInfo(data))
  }

  const reservationConfirmationJSX = (
    <>
      <h3>Reserve found!</h3>
      <p>{reservationInfo?.reservation?.pick_up_time}</p>
      <p>{reservationInfo?.user?.email}</p>
      <p>{reservationInfo?.book?.author}: {reservationInfo?.book?.title}</p>
      <form>
        <button>{reservationInfo?.book?.reserved ? 'Return' : 'Lend'}</button>
      </form>
    </>
  )

  return (
    <>
      <form>
        <input type="text" onChange={event => setCode(event.currentTarget.value)} />
        <button onClick={event => handleSearchReservation(event)}>Search Reservation</button>
      </form>
      { reservationInfo && reservationConfirmationJSX }
    </>
  )
}

export default ReservationForm
