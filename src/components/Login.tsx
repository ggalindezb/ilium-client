import { useState } from 'react'
import { callLogin } from '../services/authentication'

interface Props {
  handleJwt: (jwt: string) => void
}

function Login(props: Props) {
  const { handleJwt } = props
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleLogin = (event) => {
    event.preventDefault()
    if(!email || !password) return

    callLogin(email, password).then(data => handleJwt(data.jwt))
  }

  return (
    <>
      <form>
        <input type="text" placeholder="Email" onChange={event => setEmail(event.currentTarget.value)} />
        <input type="password" placeholder="Password" onChange={event => setPassword(event.currentTarget.value)} />
        <button onClick={event => handleLogin(event)}>Login</button>
      </form>
    </>
  )
}

export default Login
