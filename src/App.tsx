import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <label htmlFor="author"></label>
        <input type="text" name="author" />
        <label htmlFor="title"></label>
        <input type="text" name="title" />
        <button>Search</button>
      </form>
      <hr />
      <table>
        <thead>
          <tr>
            <td>Author</td>
            <td>Title</td>
            <td>Available</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Author 1</td>
            <td>Title 1</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Author 2</td>
            <td>Title 2</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
