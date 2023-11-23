import { useState, useEffect } from 'react'
import { fetchBooks } from '../services/Books'

interface Props {
  jwt: string
}

interface Book {
  id: string
  author: string
  title: string
  reserved: boolean
}

function BookSearchForm(props: Props) {
  const { jwt } = props
  const [books, setBooks] = useState<Book[]>()
  const [author, setAuthor] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    if(!books) fetchBooks(jwt, author, title).then(data => setBooks(data))
  }, [jwt, books, author, title])

  const handleSearch = (event) => {
    event.preventDefault()
    fetchBooks(jwt, author, title).then(data => setBooks(data))
  }

  const booksTable = (
    <>
      {books?.map(book => {
        return (
          <tr>
            <td>{book.author}</td>
            <td>{book.title}</td>
            <td>{book.reserved ? 'Yes' : 'No'}</td>
            <td>{book.reserved ? <button>Reserve</button> : ''}</td>
          </tr>
        )
      })}
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
    </>
  )
}

export default BookSearchForm
