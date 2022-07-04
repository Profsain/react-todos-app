import React from 'react';
import styles from './TodoItem.module.css';

const TodosItem = (props) => {
  const { id, title, completed, } = props.todo;
  const { handleChangeProp, handleDeleteTodo } = props;
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

export default TodosItem;
