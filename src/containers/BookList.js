import React, { Component } from "react";
import Form from "../components/Form";
import Book from "../components/Book"
import SearchForm from "../components/SearchForm"

class BookList extends Component {

  state = {
    books: [],
    search: ""
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

  handleSearch = (e) => {
    console.log("changing")
    this.setState({
        search: e.target.value
    })
  }

  filterBooks = () => {
    return this.state.books.filter(book => book.title.toUpperCase().includes(this.state.search.toUpperCase()))
  }

  render(){
    // console.log("In booklist", this.state.books)
    let books = this.filterBooks().map(bookObj => <Book key = {bookObj.title} book = {bookObj} handleClick = {this.props.handleClick}/>)
    // make key book id when save to database
    return (
      <div className="book-list">
        <h1>Book List</h1>

        <Form handleSubmit = {this.addBook}/>
        <SearchForm handleSearch = {this.handleSearch}/>
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
