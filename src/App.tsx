import { useState } from 'react'
import './App.css'

import Login from './components/Login'
import BookSearchForm from './components/BookSearchForm'

function App() {
  const [jwt, setJwt] = useState<string|null>()
  const handleJwt = (jwt: string) => {
    setJwt(jwt)
  }

  return (
    <>
      { !jwt && <Login handleJwt={handleJwt} /> }
      { jwt && <BookSearchForm jwt={jwt} /> }
    </>
  )
}

export default App
