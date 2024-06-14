import React from 'react';

const TodoItem = ({ todo, removeTodo, toggleComplete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={toggleComplete} style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}>
        {todo.task}
      </span>
      <button onClick={removeTodo}>Remove</button>
    </li>
  );
};

export default TodoItem;
