export const searchReservation = async (jwt: string, code: string) => {
  const url = `http://localhost:3000/reserve/${code}`

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer: ${jwt}`,
      'Content-Type': 'application/json',
    }
  })
  return response.json()
}
