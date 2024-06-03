import React, { useState, useEffect } from 'react';
import TodoList from "mfe_app_list/ListApp";
import { Todo } from "../utils/localStorage";
import { saveTodos } from "../utils/localStorage";

interface TodoList {
  id: number;
  description: string;
  completed: boolean;
}

const TodoCreate = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    saveTodos(todos)
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    const newTodoItem: TodoList = {
      id: todos.length + 1,
      description: newTodo,
      completed: false,
    };
    
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
        { todos &&
          <TodoList todos={todos} setTodos={setTodos} />
        }
    </div>
  );
};

export default TodoCreate;
