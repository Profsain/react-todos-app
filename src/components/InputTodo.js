import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { title } = this.state;
    const { addNewTodoProps } = this.props;
    event.preventDefault();
    if (title.trim()) {
      addNewTodoProps(title);
      this.setState({
        title: '',
      });
    }
  }

  render() {
    const { title } = this.state;
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

InputTodo.propTypes = {
  addNewTodoProps: PropTypes.func.isRequired,
};
