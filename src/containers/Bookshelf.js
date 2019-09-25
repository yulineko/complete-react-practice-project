import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {

  render(){
    // console.log("bookshelf props", this.props.book)
    // console.log("bookshelf props 2", this)

    //can currently add duplicates
    let books = this.props.book.map(bookObj => <Book key = {bookObj.id} book = {bookObj} handleClick = {this.props.handleClick}/>)
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
