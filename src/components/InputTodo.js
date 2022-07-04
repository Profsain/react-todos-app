import React, { Component } from 'react'

export default class InputTodo extends Component {
  state = {
    title: "",
  }

  // form input handler
  onChangeHandler = (event) => {
    this.setState({
      title: event.target.value,
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.title.trim()) {
      this.props.addNewTodoProps(this.state.title);
      this.setState({
        title: "",
      })
    } else {
      alert("Please enter a todos items")
    }

  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          className='input-text'
          type="text"
          placeholder="Add New Todos......"
          value={this.state.title}
          onChange={this.onChangeHandler}
        />
        <button className='input-submit'>Submit</button>
      </form>
    )
  }
}
