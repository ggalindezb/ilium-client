import { useState } from 'react'

function BookSearchForm() {
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
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Author 1</td>
            <td>Title 1</td>
            <td>Yes</td>
            <td><button>Reserve</button></td>
          </tr>
          <tr>
            <td>Author 2</td>
            <td>Title 2</td>
            <td>No</td>
            <td><button>Reserve</button></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default BookSearchForm
