import { useState } from 'react'
import './App.css'

import Login from './components/Login'
import BookSearchForm from './components/BookSearchForm'
import ReservationForm from './components/ReservationForm'

interface User {
  jwt: string|null
  role: string|null
}

function App() {
  const [user, setUser] = useState<User>({
    jwt: null,
    role: null
  })
  const { jwt, role } = user

  const handleUser = (jwt: string, role: string) => {
    setUser({
      jwt,
      role
    })
  }

  return (
    <>
      { !jwt && <Login handleUser={handleUser} /> }
      { jwt && role === 'member' && <BookSearchForm jwt={jwt} /> }
      { jwt && role === 'admin' && <ReservationForm jwt={jwt} /> }
    </>
  )
}

export default App
