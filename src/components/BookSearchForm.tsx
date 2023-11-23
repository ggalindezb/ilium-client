import { useState, useEffect } from 'react'
import { fetchBooks, reserveBook } from '../services/Books'

interface Props {
  jwt: string
}

interface Book {
  id: number
  author: string
  title: string
  reserved: boolean
}

interface Reserve {
  id: number
  code: string
  pick_up_time: string
}

function BookSearchForm(props: Props) {
  const { jwt } = props
  const [books, setBooks] = useState<Book[]>()
  const [author, setAuthor] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [reserve, setReserve] = useState<Reserve>()

  useEffect(() => {
    if(!books) fetchBooks(jwt, author, title).then(data => setBooks(data))
  }, [jwt, books, author, title])

  const handleSearch = (event) => {
    event.preventDefault()
    fetchBooks(jwt, author, title).then(data => setBooks(data))
  }

  const handleReserve = (event, id: number) => {
    event.preventDefault()
    reserveBook(jwt, id).then(data => setReserve(data))
  }

  const booksTable = (
    <>
      {books?.map(book => {
        return (
          <tr key={book.id}>
            <td>{book.author}</td>
            <td>{book.title}</td>
            <td>{!book.reserved ? 'Yes' : 'No'}</td>
            <td>{book.reserved ? '' : <button onClick={event => handleReserve(event, book.id)}>Reserve</button>}</td>
          </tr>
        )
      })}
    </>
  )

  const reservationConfirmation = (
    <>
      <p>Your reservation is confirmed</p>
      <p>Show this code to the clerk: {reserve?.code}</p>
      <p>by {reserve?.pick_up_time}</p>
    </>
  )

  return (
    <>
      <form>
        <label htmlFor="author"></label>
        <input type="text" name="author" onChange={event => { setAuthor(event.currentTarget.value) }} />
        <label htmlFor="title"></label>
        <input type="text" name="title" onChange={event => { setTitle(event.currentTarget.value) }} />
        <button onClick={event => handleSearch(event)}>Search</button>
      </form>
      <hr />
      <table>
        <thead>
          <tr>
            <td>Author</td>
            <td>Title</td>
            <td>Available</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {booksTable}
        </tbody>
      </table>
      { reserve && reservationConfirmation}
    </>
  )
}

export default BookSearchForm
