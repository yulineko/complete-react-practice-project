import React, { Component } from "react";
import Form from "../components/Form";
import Book from "../components/Book"
// import SearchForm from "../components/SearchForm"

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

  addBook = (book) => {
    this.setState({
      books: [book, ...this.state.books]
    })
  }


  render(){
    // console.log("In booklist", this.state.books)
    let books = this.state.books.map(bookObj => <Book key = {bookObj.title} book = {bookObj} handleClick = {this.props.handleClick}/>)
    // make key book id when save to database
    return (
      <div className="book-list">
        <h1>Book List</h1>

        <Form handleSubmit = {this.addBook}/>

        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
