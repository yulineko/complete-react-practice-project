import React from "react";

class Book extends React.Component {
  state = {
    clicked: false,
    comments: [],
    newComment: "",
    commentsForm: false,
    allComments: false
  }

  handleAddComment = () => {
    this.setState({
      commentsForm: !this.state.commentsForm
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCommentSubmit = (e) => {
    // console.log("Comment: ", this.state.newComment)
    e.preventDefault()
    this.setState({
      comments: [...this.state.comments, this.state.newComment]
    })
    this.setState({
      newComment: ""
    })
  }

  handleShowComments = () => {
    console.log("comments: ", this.state.comments.join(". "))
    this.setState({
      allComments: !this.state.allComments
    })
  }

  getBook = () => {
    console.log(this.props.book)
    this.props.handleClick(this.props.book)
  }


  render(){
    console.log("Book props", this.props)
    const commentForm = 
      <div>  
        <textarea name = "newComment" placeholder = "Add a new comment here" value = {this.state.newComment} onChange = {this.handleChange}/>
        <br></br>
        <button onClick = {this.handleCommentSubmit}>Submit</button>
      </div>
    // make this its own file
    // console.log("comms: ", this.state.comments)

    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img src = {this.props.book.img} alt = {this.props.book.img} onClick = {this.getBook}/>
        <br></br>
        <button onClick = {this.handleAddComment}>Add comment</button>
          {this.state.commentsForm ? commentForm : null} 
        <br></br>
        <button onClick = {this.handleShowComments}>Show comments</button>
          {this.state.allComments ? <ul>{this.state.comments.map(comment => <li key = {comment}>{comment}</li>)}</ul> : null}
      </div>
    );
  }
};

export default Book;
