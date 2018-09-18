import React, { Component } from 'react'
import Book from './book'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom';


class BookSearchPage extends Component {

  state = {
    query: "",
    booksShowing: []
  }

  updateQuery = (newQuery) => {
  this.setState({
    query : newQuery
  })
  this.updatebooksShowing(newQuery)
  }

  updatebooksShowing = (newQuery) => {

    if (newQuery) {
      BooksAPI.search(newQuery).then((booksShowing) => {
      if (booksShowing.error){
        this.setState({ booksShowing: []});
        } else {
        this.setState({ booksShowing: booksShowing
        });
      }
    })
    } else {
      this.setState({ booksShowing: []});
    }
  }

  render() {
    const updateShelf = this.props.updateShelf
    const books = this.props.books

    return (
       <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">

            <input type="text"
             placeholder="Search by title or author"
             value={this.state.query}
             onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.booksShowing.map(newBook => {
                let shelf = 'none'

                  books.map(book => (
                  book.id === newBook.id ?
                  shelf = book.shelf : 'none'
                  ))

                return (
                  <li key={newBook.id}>
                    <Book
                      book={newBook}
                      updateShelf={updateShelf}
                      currentShelf={shelf}
                    />
                 </li>
                  )
                })
              }
            </ol>
          </div>
        </div>
      );
    }
}
export default BookSearchPage
