import React from 'react';
import styles from './TodoItem.module.css';
import PropTypes from 'prop-types';

const TodosItem = (props) => {
  const { todo, handleChangeProp, handleDeleteTodo } = props;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <input
        className={styles.checked}
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProp(todo.id)}
      />
      <span style={todo.completed ? completedStyle : null}>
        {todo.title}
      </span>
      <button type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

TodosItem.propTypes = {
  todo: PropTypes.object,
  handleChangeProp: PropTypes.func,
  handleDeleteTodo: PropTypes.func
}

export default TodosItem;
