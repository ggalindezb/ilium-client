export const fetchBooks = async (jwt: string, author: string, title: string) => {
  let url = 'http://localhost:3000/book/search?'

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
  const url = `http://localhost:3000/book/reserve/${id}`

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
