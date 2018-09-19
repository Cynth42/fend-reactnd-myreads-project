# MyReads Book Tracking App - Project 6

### Udacity Front-End Web Developer Nanodegree program - Project's Overview:

This is a digital bookshelf/library built with React. It is concerned with server requests and search of books with updates.  This book tracking app allows users to select and add books in different categories such as: Currently Reading, Want to Read and Read onto the bookshelf. It is comprised of a backend server/database/library that is used to fetch books request and updates.  


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Resources](#resources)
* [Credits](#credits)
* [License](#license)


## Installation

* Clone or download the repository from Github or get the 
  [starter code](https://github.com/Cynth42/reactnd-project-myreads-starter)

* Go into your terminal and cd into project's folder and 

* Run `npm install` to install all of the project's dependencies.

* Then run `npm start` to launch the app if you have downloaded Node.js. 

* A new browser window should automatically open displaying the app if not open `http://localhost:3000` in your browser.

* If Node.js is not installed, download it [here](https://nodejs.org/en/download/)

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

* There is a text input field that is used to search for books.  Type into the search field by author's name or title as         books that matched your query will be displayed. About 20 or more books will be displayed.
  
* The search results allows for selection of putting the books into diferent shelves such as: "currently read", "want to read"   and "read".

* The search results persists on the shelves when you navigate to the main page. 

* Note that this app uses a backend API that is limited to a fixed set of search terms you can such for. 


### Backend API

* The backend API uses a fixed set of cached search results 
  and is limited to a particular set of search terms, which can be found in 
  [SEARCH_TERMS.md.](https://github.com/Cynth42/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md) 
* That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket       Weaving or Bubble Wrap don't come back with any results :)
  

## Resources

These resources were very useful in understanding how to build this project:
* [React Docs](https://reactjs.org/)
* [create React documentation](https://github.com/facebookincubator/create-react-app)
* [React Router Documentation](https://www.npmjs.com/package/react-router-dom)
* [Maeva's](https://www.youtube.com/watch?v=i6L2jLHV9j8) - Helped me understand how to create the search function.


## Credits

* Special thanks and appreciation to the Grow with Google and Udacity Front End Scholarship Program!


## License

* This project is licensed under the terms of the MIT license











