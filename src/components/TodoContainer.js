import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Go for lounch break',
          completed: true,
        },
      ],
    };
  }

  handleChanges = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.filter((todo) => todo.id !== id),
      ],
    }));
  }

  addNewTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  }

  render() {
    const todosList = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addNewTodoProps={this.addNewTodo} />
          <TodosList
            todos={todosList.todos}
            handleChangesProp={this.handleChanges}
            handleDeleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}
