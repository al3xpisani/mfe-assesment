import React, { useState, useEffect } from 'react';
import TodoList from 'mfe_app_list/ListApp';
import { Todo, loadTodos } from '../utils/localStorage';
import { saveTodos } from '../utils/localStorage';

interface TodoListInterface {
  id: number;
  description: string;
  completed: boolean;
}

const TodoCreate = () => {
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState<string>('All');
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodoItems = loadTodos();
    return savedTodoItems ? savedTodoItems : [];
  });

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const newTodoItem: TodoListInterface = {
      id: todos.length + 1,
      description: newTodo,
      completed: false
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <input
        data-testid="input-todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button data-testid="create-todo-button" onClick={addTodo}>
        Add Todo
      </button>
      <div>
        Filter:
        <label>
          <input
            type="radio"
            value="All"
            checked={filter === 'All'}
            onChange={() => setFilter('All')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="Active"
            checked={filter === 'Active'}
            onChange={() => setFilter('Active')}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            value="Completed"
            checked={filter === 'Completed'}
            onChange={() => setFilter('Completed')}
          />
          Completed
        </label>
      </div>
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
};

export default TodoCreate;
