import React, { Component } from 'react'
import Book from './book'

class BookShelf extends Component {
   render() {

   const books = this.props.books
   const updateShelf = this.props.updateShelf
   
   return (
      <div className="shelfContainer">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                books.filter(book => book.shelf === 'currentlyReading')
                .map(book => (
                  <li key={book.id} >
                    <Book book={book} updateShelf={updateShelf} currentShelf="currentlyReading"/>
                  </li>
                  ))
                 }
              </ol>
            </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                 {
                books.filter(book => book.shelf === "wantToRead")
                .map(book => (
                  <li key={book.id} >
                    <Book book={book} updateShelf={updateShelf} currentShelf="wantToRead"/>
                  </li>
                  ))
                }
              </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                books.filter(book => book.shelf === "read")
                .map(book => (
                  <li key={book.id} >
                    <Book book={book} updateShelf={updateShelf} currentShelf="read" />
                  </li>
                 ))
                }
              </ol>
            </div>
          </div>
      </div>
      )
    }
 }

export default BookShelf
