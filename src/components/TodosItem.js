import React from 'react';
import styles from "./TodoItem.module.css"

const TodosItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  return (
    <li className={styles.item}>
      <input
        className={styles.checked}
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChangeProp(props.todo.id)}
      />
      <span style={props.todo.completed ? completedStyle : null}>
        {props.todo.title}
      </span>
      <button onClick={() => props.handleDeleteTodo(props.todo.id)}>Delete</button>
    </li>
  )
}

export default TodosItem;
