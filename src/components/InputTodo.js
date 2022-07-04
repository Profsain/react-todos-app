import React, { Component } from 'react';

export default class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  // form input handler
  onChangeHandler = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.title.trim()) {
      this.props.addNewTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    }
  }

  render() {
    const title = this.state.title;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          className="input-text"
          type="text"
          placeholder="Add New Todos......"
          value={title}
          onChange={this.onChangeHandler}
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}
