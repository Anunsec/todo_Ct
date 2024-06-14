import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          removeTodo={() => removeTodo(index)}
          toggleComplete={() => toggleComplete(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
