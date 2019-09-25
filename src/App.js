import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    shelf: []
  }

  handleClick = (book) => {
    this.setState({
      shelf: [...this.state.shelf, book]
    })
  }

  handleRemove = (book) => {
    let removeBook = this.state.shelf.filter(bookObj => bookObj.id !== book.id)
    console.log("removing: ", removeBook)
    this.setState({
      shelf: removeBook
    })
  }

  render(){
    return (
      <div className="book-container">
        <BookList handleClick = {this.handleClick}/>
        <Bookshelf book = {this.state.shelf} handleClick = {this.handleRemove}/>
      </div>
    );
  }
}

export default App;
