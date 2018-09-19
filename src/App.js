import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

/**
 * Invoked immediately before books are
 * inserted into the DOM
 */
  componentDidMount() {
    this.getBooks()
  }

/**
 * Fetches all books from backend server
 * on to bookshelf using the BooksAPI's
 * getAll method
 */
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

/**
 * Updates all books on the bookshelf from backend server
 * using the BookAPI update method when user changes
 * the shelf for the book without refreshing the browser
 */
 updateBookShelf = (book, shelf) => {
  const bookIndex = this.state.books.findIndex(
       prevBook => prevBook.id === book.id
     )
  
     let newState
     
     if (bookIndex !== -1) {
       newState = Object.assign({}, this.state.books)
       newState[bookIndex].shelf = shelf
     }
     BooksAPI.update(book, shelf)
     this.getBooks({ newState })
 }

 render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <ListBooks books={this.state.books}
            updateBookShelf={this.updateBookShelf}/>
          )}
        />

        <Route
          path='/search'
          render={({ history }) => (
            <SearchBooks
            books={this.state.books}
            updateBookShelf={this.updateBookShelf}/>
          )}
        />
    </div>
    )
  }
}

export default BooksApp
