import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { task, completed: false }]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sort === 'asc') return a.task.localeCompare(b.task);
    if (sort === 'desc') return b.task.localeCompare(a.task);
    return 0;
  });

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <div className="controls">
        <div className="filters">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('active')}>Active</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
        </div>
        <div className="sorting">
          <button onClick={() => setSort('asc')}>Sort Asc</button>
          <button onClick={() => setSort('desc')}>Sort Desc</button>
        </div>
      </div>
      <TodoList todos={sortedTodos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
