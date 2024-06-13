import React from 'react';
import TodoList from './TodoList/TodoList';
import TodoListProps from './types';

const ListApp: React.FC<TodoListProps> = ({ todos, setTodos }) => (
  <TodoList todos={todos} setTodos={setTodos} />
);
export default ListApp;
