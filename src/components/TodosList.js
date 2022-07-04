import React, { Component } from 'react';
import TodosItem from './TodosItem';

export default class TodosList extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo) => (
              <TodosItem 
                key={todo.id} 
                todo={todo}
                handleChangeProp={this.props.handleChangesProp}
                handleDeleteTodo={this.props.handleDeleteTodo}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}
