import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {


  render(){
    // console.log("bookshelf props", this.props.book)
    // console.log("bookshelf props 2", this)

    let books = this.props.book.map(bookObj => <Book key = {bookObj.title} shelfBook = {bookObj}/>)
    console.log(books)
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{books}</ul>
      </div>
    );
  }
};


export default Bookshelf;
