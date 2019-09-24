import React, { Component } from "react";
import Form from "../components/Form";
import Book from "../components/Book"

class BookList extends Component {

  state = {
    books: []
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(data => this.setState({
        books: data
      }))
  }

  render(){
    console.log(this.state.books)
    let books = this.state.books.map(bookObj => <Book key = {bookObj.id} book = {bookObj}/>)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
