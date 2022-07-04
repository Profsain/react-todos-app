import React from 'react';
import PropTypes from 'prop-types';
import TodosItem from './TodosItem';

const TodosList = (props) => {
  const { todos, handleChangesProp, handleDeleteTodo } = props;
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
  );
};

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleChangesProp: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};

export default TodosList;
