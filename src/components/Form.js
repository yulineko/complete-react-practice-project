import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    img: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      title: "",
      img: ""
    })
  }

  render(){
    return (
      <div>
        <h3>Add a book</h3>
        <form onSubmit = {this.handleSubmit}>
          Title: <input type = "text" placeholder = "Book title" value = {this.state.title} name = "title" onChange = {this.handleChange} />
          <br></br>
          Image: <input type = "text" placeholder = "Image url" value = {this.state.img} name = "img" onChange = {this.handleChange} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default Form;
