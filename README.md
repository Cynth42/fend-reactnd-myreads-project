# MyReads App - Project 6

### Udacity Front-End Web Developer Nanodegree program

This is a digital bookshelf/library built with React. It is concerned with server requests and search of books with updates.  This book tracking app allows users to select and add books in different categories such as: Currently Reading, Want to Read and Read onto the bookshelf. This project is comprised of a backend server/database/library that is used to get books request and updates.  


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Resources](#resources)
* [Credits](#credits)


## Installation

* Clone or download the repository from Github or get the [starter code](

* Go into your terminal and cd into project's folder and 

* Run `npm install` to install all of the project's dependencies.

* Then run `npm start` to launch the app if you have downloaded Node.js. 

* A new browser window should automatically open displaying the app if not open `http://localhost:3000` in your browser.

* If Node.js is not installed, download it [HERE]([Youtube](https://nodejs.org/en/download/)

* Then follow the above steps 1-4 to install its dependencies and launch the App.

* You can also built this project from scratch with [Create React App](https://github.com/facebook/create-react-app) and You     can find more information on how to perform common tasks 
  [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).        
 

## Usage

### On the Main Page: 


* Books are categorize into three sections: Currently Reading, Want to Read and Read.

* On the cover of the book, you have a control - a green arrow which when clicked provides a drop down button that allows       you to change a book's category or move books to different shelves or even remove a book from the list. 

* Information persist when browser is refreshed on both the main page and the search page.

* The '+' green button in the bottom right on the Main page opens a search page, where you can search for more books to add     to your bookshelf.


### On the Search Page:

* There is an text input field that is used to search for books.  Type into the search field by author's name or title as       books that matched the your query will be displayed. About 20 or more books will be displayed.
  
* The search results allows for selection of putting the books into diferent shelves sucha s: "currently read", "want to read"   and "read".

* The search results persists on the shelves when you navigate to the main page. 

* Note that the backend API is limited to a fixed set of search terms: 
  ***search terms:
  'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography',           'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai',           'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film',       'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey',         'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery',           'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River',       'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy',   'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'  
 
 * Only these terms provided in the above list will be returned in your search results :)



## Resources

These resources were very useful in understanding how to build this project:
* [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/) -         Explains what a service worker is,
* [Stackoverflow](https://stackoverflow.com/questions/47160929/progressive-web-app-uncaught-in-promise-typeerror-failed-to-fetch?rq=1) - resolved this error: Uncaught (in promise) TypeError: Failed to fetch.
* [Youtube](https://www.youtube.com/watch?v=ksXwaWHCW6k&feature=youtu.be) - How to set up service worker by Traversy Media
* [Youtube](https://www.youtube.com/watch?v=92dtrNU1GQc) - walkthrough by (Doug Brown)


## Credits

* Special thanks and appreciation to the Grow with Google and Udacity Front End Scholarship Program!











# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
