import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
  console.log("bookshelf props", props)

  // let shelfBooks = props.book.map(shelfBookObj => <Book key = {shelfBookObj.title} shelfBook = {shelfBookObj}/>)
  return (
    <div>
      <h1>Book Shelf</h1>
      {/* <ul>{shelfBooks}</ul> */}
    </div>
  );
};

export default Bookshelf;
