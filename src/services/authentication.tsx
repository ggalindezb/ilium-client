import { API_URL } from './Constants'

export const callLogin = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/authentication`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  return response.json()
}
