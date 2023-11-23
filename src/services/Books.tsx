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
