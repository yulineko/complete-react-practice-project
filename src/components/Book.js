import React from "react";

class Book extends React.Component {
  state = {
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
  }

  handleShowComments = () => {
    
  }

  

  render(){
    // console.log("Book props", this.props)
    const commentForm = 
      <div>  
        <textarea name = "newComment" placeholder = "Add a new comment here" value = {this.state.newComment} onChange = {this.handleChange}/>
        <br></br>
        <button onClick = {this.handleCommentSubmit}>Submit</button>
      </div>

    // console.log("comms: ", this.state.comments)

    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img src = {this.props.book.img} />
        <br></br>
        <button onClick = {this.handleAddComment}>Add comment</button>
          {this.state.commentsForm ? commentForm : null} 
        <br></br>
        <button onClick = {this.handleShowComments}>Show comments</button>
          {this.state.comments ? <ul>{this.state.comments.map(comment => <li>{comment}</li>)}</ul> : null}
      </div>
    );
  }
};

export default Book;
