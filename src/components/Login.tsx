import { useState } from 'react'

interface Props {
  handleJwt: (jwt: string) => void
}

function Login(props: Props) {
  const { handleJwt } = props
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleLogin = (event) => {
    event.preventDefault()

    handleJwt('eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoibWVtYmVyIn0.JOyUK5vTfb-v8SBZyFLduJL8WM0dao8OzYSxhAFQq8E')
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
