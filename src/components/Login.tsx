import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleLogin = (event) => {
    event.preventDefault()

    console.log(email, password)
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
