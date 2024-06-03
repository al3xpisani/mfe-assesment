import React from 'react';
import TodoListProps from "../types";

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
}
  return (
    <ul>
      {todos && todos.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed ? true : false}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.description}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
