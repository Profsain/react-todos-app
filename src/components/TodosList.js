import React from 'react'
import TodosItem from './TodosItem';

export default function TodosList(props) {
  const { todos, handleChangesProp, handleDeleteTodo } = props
  return (
    <div>
        <ul>
          {
            todos.map((todo) => (
              <TodosItem
                key={todo.id}
                todo={todo}
                handleChangeProp={handleChangesProp}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))
          }
        </ul>
      </div>
  )
}
