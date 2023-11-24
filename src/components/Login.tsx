import { useState } from 'react'
import { callLogin } from '../services/authentication'

interface Props {
  handleUser: (jwt: string, role: string) => void
}

function Login(props: Props) {
  const { handleUser } = props
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleLogin = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if(!email || !password) return

    callLogin(email, password).then(data => handleUser(data.jwt, data.role))
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
