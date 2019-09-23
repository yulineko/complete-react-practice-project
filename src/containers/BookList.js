import React, { Component } from "react";
import Form from "../components/Form";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Form />
      <ul>{/*render list of books here*/}</ul>
    </div>
  );
}

export default BookList;
