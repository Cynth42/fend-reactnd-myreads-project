import React from 'react'
import { Route } from 'react-router-dom'
import ListBooksPage from './components/listBooksPage'
import BookSearchPage from './components/bookSearchPage'
import * as BooksAPI from './components/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
       BooksAPI.getAll().then((books) => {
         this.getBooks()
      })
    })
 }

 render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <ListBooksPage books={this.state.books} updateShelf={this.updateShelf}/>
          )}
        />

        <Route
          path='/search'
          render={({ history }) => (
            <BookSearchPage
            books={this.state.books}
            updateShelf={this.updateShelf}/>
          )}
        />
    </div>
    )
  }
}

export default BooksApp
