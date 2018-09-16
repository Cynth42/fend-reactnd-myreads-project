import React from 'react'
import BookMainPage from './components/bookMainPage'
import BookSearchPage from './components/bookSearchPage'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {

    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      //console.log('data', books)
      this.setState({ books: books })
    })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <BookMainPage books={this.state.books} />
      </div>
    )
  }
}

export default BooksApp
