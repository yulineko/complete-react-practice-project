import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
  console.log("bookshelf props", props)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{/*render list of books here*/}</ul>
    </div>
  );
};

export default Bookshelf;
