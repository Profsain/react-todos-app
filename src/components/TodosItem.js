import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodosItem = (props) => {
  const { todo, handleChangeProp, handleDeleteTodo } = props;
  const { id, title, completed } = todo;
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
        checked={completed}
        onChange={() => handleChangeProp(id)}
      />
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
      <button type="button" onClick={() => handleDeleteTodo(id)}>Delete</button>
    </li>
  );
};

TodosItem.propTypes = {
  handleChangeProp: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
  todo: PropTypes.shape({
    completed: PropTypes.any,
    id: PropTypes.any,
    title: PropTypes.any
  }),
};

export default TodosItem;
