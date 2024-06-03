declare module 'mfe_app_list/ListApp' {
  import React from 'react';

  interface TodoItem {
    id: number;
    description: string;
    completed: boolean;
  }

  interface TodoListProps {
    todos: TodoItem[];
    setTodos: React.Dispatch<React.SetStateAction<TodoIitem[]>>;
  }

  const TodoList: React.FC<TodoListProps>;
  export default TodoList;
}