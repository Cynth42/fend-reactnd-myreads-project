import React, { Component } from 'react'
import BookShelf from './bookShelf'
import { Link } from 'react-router-dom'

class ListBooksPage extends Component {
   render() {
      const books = this.props.books
      const updateShelf = this.props.updateShelf

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Digital Reads</h1>
          </div>

          {<BookShelf books={books}
            updateShelf={updateShelf}
          />}
          
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
     </div>
    )
   }
 }

export default ListBooksPage
