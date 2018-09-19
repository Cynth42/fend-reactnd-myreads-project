import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
  state = {
    query: "",
    booksShowing: []
  }
/**
 * The search function takes a query. The books that matched the 
 * query are displayed. If there is no match for the query, 
 * the fetch request will return an empty array. Users are able to 
 * search for multiple words within the search terms.  Search works when 
 * there is no thumbnail or authors. If the query throws an error, the 
 * fetch request returns an empty array. There are no books shown 
 * when the search input box's text are deleted.
 */
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
    const updateBookShelf = this.props.updateBookShelf
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
                      updateBookShelf={updateBookShelf}
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

export default SearchBooks
