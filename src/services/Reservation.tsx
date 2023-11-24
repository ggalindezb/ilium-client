import { API_URL } from "./Constants"

export const searchReservation = async (jwt: string, code: string) => {
  const url = `${API_URL}/reserve/${code}`

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer: ${jwt}`,
      'Content-Type': 'application/json',
    }
  })
  return response.json()
}

export const updateReservation = async (jwt: string, code: string) => {
  const url = `${API_URL}/reserve/${code}`

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer: ${jwt}`,
      'Content-Type': 'application/json',
    }
  })
  return response.json()
}
