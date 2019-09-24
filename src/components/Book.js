import React from "react";

const Book = (props) => {
  console.log("Book props", props)
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img src = {props.book.img} />
      <br></br>
      <button>Add comment</button>
      <br></br>
      <button>All comments</button>
    </div>
  );
};

export default Book;
