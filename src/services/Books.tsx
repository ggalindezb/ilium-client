import { API_URL } from "./Constants"

export const fetchBooks = async (jwt: string, author: string, title: string) => {
  let url = `${API_URL}/book/search?`
  url += new URLSearchParams({ author, title })

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer: ${jwt}`,
      'Content-Type': 'application/json',
    }

  })
  return response.json()
}

export const reserveBook = async (jwt: string, id: number) => {
  const url = `${API_URL}/book/reserve/${id}`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer: ${jwt}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      pick_up_time: new Date().toISOString()
    })
  })
  return response.json()
}
